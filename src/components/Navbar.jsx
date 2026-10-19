import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        MySite
      </Link>
      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
