import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Kartheesan
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/kartheesan05/" target="_blank">
            <motion.img
              src="/linkedin-svg.svg"
              alt=""
              whileHover={{ scale: 1.2 }}
            />
          </a>
          <a href="https://github.com/kartheesan05" target="_blank">
            <motion.img
              src="/gh-svg.svg"
              alt=""
              whileHover={{ scale: 1.2 }}
              id="github"
            />
          </a>
          <a href="https://www.instagram.com/kxrtz_10/" target="_blank">
            <motion.img
              src="/instagram-svg.svg"
              alt=""
              whileHover={{ scale: 1.2 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
