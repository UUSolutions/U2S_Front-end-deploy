import { FaUmbrella } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Left: Brand */}
        <div className="d-flex align-items-center me-4">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <FaUmbrella className="me-2" />
            U2_Solutions
          </a>
        </div>

        {/* Center: Search Form */}
        <div className="flex-grow-1 d-flex justify-content-center">
          <form className="d-flex" role="search" style={{ maxWidth: "400px", width: "100%" }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>

        {/* Right: Collapsible Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Articles">Articles</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Directories</a> */}
              <Link className="nav-link" to="/Directories" >Directories</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Research
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Publications</a></li>
                <li><a className="dropdown-item" href="#">Projects</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Other</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;