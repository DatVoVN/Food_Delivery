import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            LoreAd officia reprehenderit ex consectetur qui veniam consectetur
            laborum amet. Qui esse ullamco quis et id voluptate tempor labore
            labore. Adipisicing aliquip duis nostrud velit. Enim deserunt Lorem
            amet tempor pariatur commodo voluptate nisi. Et id ea qui officia
            cupidatat excepteur dolore dolor amet ut sit.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0824480256</li>
            <li>dat246642@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024 by Vo Van Dat - All Right Reversed
      </p>
    </div>
  );
};

export default Footer;
