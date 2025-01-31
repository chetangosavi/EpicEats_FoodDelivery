import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-containt">
        <div className="footer-containt-left">
          <img src={assets.logo2} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            quam.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-containt-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-containt-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91-9898989898</li>
            <li>contact@epiceats.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        <p>© {new Date().getFullYear()} EpicEats. All rights reserved.</p>
      </p>
    </div>
  );
};
export default Footer;
