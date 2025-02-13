import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="p-2 bg-dark">
        <ul className="nav justify-content-center bg-dark">
          <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Add Book
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
