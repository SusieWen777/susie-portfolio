import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./aboutme.scss";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

function Aboutme() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      //   whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="title" variants={variants}>
        <h1>
          <motion.span whileHover={{ color: "orange" }}>About</motion.span> Me
        </h1>
      </motion.div>
      <motion.div className="content" variants={variants}>
        <motion.div className="imgContainer" variants={variants}>
          <div className="imgWrapper">
            <img src="/aboutme.png" alt="" />
          </div>
        </motion.div>
        <motion.div className="textContainer" variants={variants}>
          <p>
            I am a highly motivated and collaborative software engineer with a
            strong background in web development. Skilled in JavaScript, Python,
            and various front-end and back-end technologies, I am passionate
            about delivering efficient and user-friendly applications. My
            professional experience includes leading development teams, managing
            full-stack applications, and applying advanced analytical methods to
            solve complex problems. I hold a Master&apos;s degree in Computing
            from the Australian National University and have a proven track
            record in both educational and corporate environments. Outside of
            work, I am an avid outdoor enthusiast who loves hiking, kayaking,
            and rock climbing.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Aboutme;
