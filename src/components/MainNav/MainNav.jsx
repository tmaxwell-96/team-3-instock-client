import "./MainNav.scss";
import InStockLogo from "../../assets/Logo/InStock-Logo_2x.png";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className="nav">
        
      <div className="nav__box">
         <NavLink to="/">
             <img className="nav__logo" src={InStockLogo} alt="Logo" />
          </NavLink>
      </div>

      <div className="nav__container">
        <div className="nav__block">
          <NavLink to="/">
            <button className="nav__button nav__button--warehouse">
              {" "}
              Warehouses{" "}
            </button>
          </NavLink>
        </div>

        <div className="nav__block">
          <NavLink to="/inventory">
            <button className="nav__button  nav__button--inventory">
              {" "}
              Inventory{" "}
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
