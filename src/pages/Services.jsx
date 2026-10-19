const services = [
  {
    title: "Web Design",
    description: "Beautiful, responsive designs tailored to your brand.",
  },
  {
    title: "Development",
    description: "Fast and reliable web apps built with modern frameworks.",
  },
  {
    title: "SEO",
    description: "Boost your visibility and rank higher in search results.",
  },
  {
    title: "Support",
    description: "Ongoing maintenance and support to keep things running.",
  },
];

function Services() {
  return (
    <section>
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
