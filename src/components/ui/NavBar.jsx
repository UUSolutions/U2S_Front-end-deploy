// import { FaUmbrella } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import styles from '../../assets/styles/NavBar.module.css';

const NavBar = () => {

  // returns the appropriate class string for a nav link
  const getNavLinkClass = (isActive) => {
    return isActive ? `nav-link ${styles.NavActiveItem}` : `nav-link ${styles.navItem}`;           
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Left: Brand */}
        <div className="d-flex align-items-center me-4">
          <Link className={`navbar-brand d-flex align-items-center ${styles.navItem}`} to="/">
            {/* <FaUmbrella className="me-2" />
            U2_Solutions */}
            <img src="/images/U2S.png" className={styles.imgLOGO}/>
          </Link>
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
              <NavLink 
                to="/" 
                className={({ isActive }) => getNavLinkClass(isActive)
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/About_Us"
                className={({ isActive}) => getNavLinkClass(isActive)
              }
                aria-current="page"                 
                >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Articles"
                className={({isActive}) => getNavLinkClass(isActive)
                }
                aria-current="page"  
                >
                Articles
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Services"
                className={({isActive}) => getNavLinkClass(isActive)
                }
                aria-current="page"  
                >
                Our services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Directories"
                className={({isActive}) => getNavLinkClass(isActive)
                }
                aria-current="page"  
                >
                Directories
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${styles.navItem}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Research
              </a>
              <ul className="dropdown-menu">
                <li><a className={`dropdown-item ${styles.navItem}`} href="#">Publications</a></li>
                <li><a className={`dropdown-item ${styles.navItem}`} href="#">Projects</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className={`dropdown-item ${styles.navItem}`} href="#">Other</a></li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;