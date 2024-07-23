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
          {/* <a href="#">
            <motion.img
              src="/facebook.png"
              alt=""
              whileHover={{ scale: 1.2}}
            />
          </a> */}
          <a href="#">
            <motion.img
              src="/instagram.png"
              alt=""
              whileHover={{ scale: 1.2 }}
            />
          </a>
          <a href="#">
            <motion.img src="/youtube.png" alt="" whileHover={{ scale: 1.2 }} />
          </a>
          {/* <a href="#">
            <motion.img
              src="/dribbble.png"
              alt=""
              whileHover={{ scale: 1.2 }}
            />
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
