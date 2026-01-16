import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";

const Counter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useReveal();

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        // Handle decimals if end is small (like 2.5)
        setCount(end % 1 !== 0 ? Number(start.toFixed(1)) : Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const Stats = () => (
  <section className="stats">
    <div className="stats__container">
      {[
        { end: 500, suffix: "+", label: "Success Builds" },
        { end: 2.5, suffix: "B", prefix: "$", label: "Managed Assets", isFloat: true },
        { end: 25, suffix: "yr", label: "Industry Legacy" },
        { end: 99, suffix: "%", label: "Safety Rating" },
      ].map((s, i) => (
        <div key={i} className="stats__item">
          <div className="stats__value">
            <Counter 
              end={s.end} 
              suffix={s.suffix} 
              prefix={s.prefix} 
              duration={2500} 
            />
          </div>
          <div className="stats__label">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
