import { Link } from "react-router-dom";
import "./navbar.css";
export default function navbar() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <p> Home </p>
      </Link>

      <Link to="/contact" style={{ textDecoration: "none" }}>
        {" "}
        <p>Contact</p>{" "}
      </Link>
    </nav>
  );
}
