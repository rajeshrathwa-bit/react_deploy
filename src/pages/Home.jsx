import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <h1>Welcome to MySite</h1>
      <p>
        We build fast, modern web experiences. Navigate around to learn more
        about who we are and what we do.
      </p>
      <Link to="/services" className="hero-cta">
        Explore Services
      </Link>
    </section>
  );
}

export default Home;
