import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css"
const Navbar = ()=>{
    const [menu, setMenu] = useState("Home")
    return(
        <div className="navbar">
            <img src={assets.logo2} alt="logo" className="logo" />
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
                <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
                <li onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</li>
                <li onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Contact</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-basket-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    );
}
export default Navbar;