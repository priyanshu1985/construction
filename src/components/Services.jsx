import { HardHat, Layers, Ruler, Truck } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = ({ servicesRef }) => {
  const items = [
    {
      icon: Ruler,
      title: "Master Planning",
      description: "Feasibility frameworks.",
      count: "101",
    },
    {
      icon: HardHat,
      title: "Structural Design",
      description: "High-load analysis.",
      count: "202",
    },
    {
      icon: Layers,
      title: "BIM Integration",
      description: "Digital twin systems.",
      count: "303",
    },
    {
      icon: Truck,
      title: "Logistics Engine",
      description: "Material flow optimization.",
      count: "404",
    },
  ];

  return (
    <section ref={servicesRef} className="services">
      <div className="services__container">
        <h2 className="services__title">Core Specializations</h2>
        <div className="services__grid">
          {items.map((item, i) => (
            <ServiceCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
