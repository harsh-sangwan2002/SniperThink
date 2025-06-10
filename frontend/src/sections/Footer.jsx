import { Link } from "react-router-dom";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex items-start justify-start gap-3">
          <p className="text-teal-400">Privacy Policy</p>
          <p className="text-teal-400">Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} href={socialImg.url} target="_blank" className="icon hover:bg-teal-800">
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} <span className="text-teal-400">SniperThink.</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
