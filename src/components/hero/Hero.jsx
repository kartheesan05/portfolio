import React from "react";
import { motion } from "framer-motion";
import "./hero.scss";

const handleScrollToElement = (targetId) => {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function Hero() {
  return (
    <motion.div className="hero">
      <div className="maincontent">
        
          <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>KARTHEESAN</motion.h2>
            <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
            <motion.div className="buttons" variants={textVariants}>
              <motion.button
                variants={textVariants}
                whileHover={{ scale: 1.051 }}
                onClick={() => handleScrollToElement("Projects")}
              >
                See the Latest Works
              </motion.button>
              <motion.button
                variants={textVariants}
                whileHover={{ scale: 1.051 }}
                onClick={() => handleScrollToElement("Contact")}
              >
                Contact me
              </motion.button>
            </motion.div>
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt=""
            />
          </motion.div>
        

        <div className="imageContainer">
          <a href="https://www.linkedin.com/in/kartheesan05/" target="_blank">
            <motion.img
              src="/linkedin-svg.svg"
              alt="linkedin"
              whileHover={{ scale: 1.1 }}
            />
          </a>
          <a href="https://github.com/kartheesan05" target="_blank">
            <motion.img
              className="githubhero"
              src="/gh-svg.svg"
              alt="github"
              whileHover={{ scale: 1.1 }}
            />
          </a>
          <a href="https://www.instagram.com/kxrtz_10/" target="_blank">
            <motion.img
              src="/instagram-svg.svg"
              alt="instagram"
              whileHover={{ scale: 1.1 }}
            />
          </a>
        </div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Hello There
      </motion.div>
    </motion.div>
  );
}

export default Hero;
