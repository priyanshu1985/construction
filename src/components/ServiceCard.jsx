import { ChevronRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

const ServiceCard = ({ icon: Icon, title, description, count }) => {
  const [ref, isVisible] = useReveal();

  return (
    <div
      ref={ref}
      className={`service-card ${
        isVisible ? "service-card--visible" : "service-card--hidden"
      }`}
    >
      <div className="service-card__count">
        SCT-{count}
      </div>

      <div className="service-card__icon-wrapper">
        {Icon && <Icon size={24} />}
      </div>

      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>

      <button className="service-card__action">
        Learn More <ChevronRight size={14} />
      </button>
    </div>
  );
};

export default ServiceCard;
