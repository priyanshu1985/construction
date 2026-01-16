const Stats = () => (
  <section className="stats">
    <div className="stats__container">
      {[
        { val: "500+", label: "Success Builds" },
        { val: "$2.5B", label: "Managed Assets" },
        { val: "25yr", label: "Industry Legacy" },
        { val: "99%", label: "Safety Rating" },
      ].map((s, i) => (
        <div key={i} className="stats__item">
          <div className="stats__value">{s.val}</div>
          <div className="stats__label">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
