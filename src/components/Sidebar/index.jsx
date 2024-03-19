import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import Logos from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { MdHome } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";


const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={Logos} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}> 
        <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
          <MdHome   />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="aboutLink"
          to="/About" onClick={() => setShowNav(false)}
        >
          <SiAboutdotme    />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact" onClick={() => setShowNav(false)}
        >
          <MdOutlineContactSupport  />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="">
            <FaLinkedin  className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="">
            <FaGithub  className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="">
            <FaInstagramSquare  className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="">
            <FaTelegram className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href=""></a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
