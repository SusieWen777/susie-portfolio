import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import items from "../../data/projects.json";

//   {
//     id: 1,
//     title: "React Commerce",
//     img: "https://images.pexels.com/photos/20717262/pexels-photo-20717262/free-photo-of-radiant-reverie-capturing-the-spirit-within-abstract-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     id: 2,
//     title: "Next.js",
//     img: "https://images.pexels.com/photos/25626514/pexels-photo-25626514/free-photo-of-root-node-problems.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     id: 3,
//     title: "Music App",
//     img: "https://images.pexels.com/photos/25772368/pexels-photo-25772368/free-photo-of-piazza-san-marco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     id: 4,
//     title: "Full Stack App",
//     img: "https://images.pexels.com/photos/25853909/pexels-photo-25853909/free-photo-of-an-abstract-painting-with-white-and-blue-paint.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
// ];

// A single work
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <div className="tags">
              {item.techStack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p>{item.desc}</p>
            <div className="buttons">
              <a href={item.demo} target="_blank" rel="noopener noreferrer">
                <button className="demoBtn">View Demo</button>
              </a>
              <a href={item.code} target="_blank" rel="noopener noreferrer">
                <button className="codeBtn">View Code</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  //   const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Latest Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Portfolio;
