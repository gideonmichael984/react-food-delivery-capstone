import { FiAward, FiClipboard, FiTruck } from "react-icons/fi";
import "./Services.css";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: FiClipboard,
      title: "Easy To Order",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      icon: FiTruck,
      title: "Fastest Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      icon: FiAward,
      title: "Best Quality",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <section id="services" className="services">
      <div className="container">
        <p className="section-label">What we serve</p>
        <h3 className="section-title">Your Favourite Food Delivery Partner</h3>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
