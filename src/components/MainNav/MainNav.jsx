import "./MainNav.scss"
import InStockLogo from "../../assets/Logo/InStock-Logo_2x.png"
// import {NavLink} from "react-router-dom";


// NAVLINKS Have been "Commented Out" in order to avoid errors while project is developed


function MainNav (){



      return <nav className="nav">

      <div className="nav__box">
            {/* <NavLink to="/home" className="nav__logolink"> */}
                    <img
                        className="nav__logo"
                        src={InStockLogo}
                        alt="Logo"
                    />
            {/* </NavLink>    */}
      </div>


      <div className="nav__container">
        
            <div className="nav__block">
                    {/* <NavLink to="" > */}
                        <button className="nav__button">Warehouses</button>
                    {/* </NavLink> */}
            </div>

        
            <div className="nav__block"> 
                    {/* <NavLink to="" > */}
                        <button className="nav__button">Inventory</button>
                    {/* </NavLink> */}
            </div>

      </div> 

  
  </nav>

}

export default MainNav;