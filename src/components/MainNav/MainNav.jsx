import "./MainNav.scss"
import InStockLogo from "../../assets/Logo/InStock-Logo_2x.png"
import {NavLink} from "react-router-dom";


function MainNav (){


      return <nav className="nav">

      <div className="nav__box">
            
            {/* Created a Temporary Link to App.jsx with "anchor tag" This can be erased/replaced when needed */}
             <a href="./App.jsx">
                    <img
                        className="nav__logo"
                        src={InStockLogo}
                        alt="Logo"
                    />
             </a>
      </div>


      <div className="nav__container">
        
            <div className="nav__block">
                  <NavLink to="/">
                      <button className="nav__button"> Warehouses </button>
                  </NavLink>
            </div>
        
            <div className="nav__block"> 
                  <NavLink to="/inventory">
                     <button className="nav__button"> Inventory </button>
                 </NavLink>
            </div>

      </div> 

  </nav>

}

export default MainNav;