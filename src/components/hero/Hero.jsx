import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: { x: -500, opacity: 0 },
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
  initial: { x: 0 },
  animate: {
    x: "-100%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>BUFAN WEN</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and Software Engineer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="#Portfolio">See the Latest Projects</a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        // variants={sliderVariants}
        // initial="initial"
        // animate="animate"
      >
        <motion.div
          className="slidingTextWrapper"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Writer Content Creator Influencer
        </motion.div>
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
