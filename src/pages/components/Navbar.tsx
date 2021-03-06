
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { default as logoSvg } from "../../images/logo.png";
import "../../index.css";
const Navbar = () => {

  let activeClassName = "active-link";
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">
          <img src={logoSvg} alt="" />
          </Link>
        </div>
        <div className="navbar-menu">
        <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="../Works"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Works
          </NavLink>
          <NavLink
            to="../Practices"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Practices
          </NavLink>
          <NavLink
            to="../About"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
