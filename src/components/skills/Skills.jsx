import "./skills.scss";
import { motion } from "framer-motion";
import data from "../../data/skills.json";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaJava,
  FaNode,
  FaAws,
  FaDocker,
  FaGit,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiRedux,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAndroidstudio,
  SiPostman,
  SiVisualstudiocode,
  SiExpress,
  SiShadcnui,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const iconMap = {
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  JavaScript: FaJsSquare,
  TypeScript: SiTypescript,
  ReactJs: FaReact,
  TailwindCSS: SiTailwindcss,
  Bootstrap: SiBootstrap,
  ReduxToolkit: SiRedux,
  NodeJs: FaNode,
  Python: FaPython,
  Java: FaJava,
  Postgresql: SiPostgresql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  AWS: FaAws,
  Docker: FaDocker,
  Git: FaGit,
  Figma: FaFigma,
  AdobePS: SiAdobephotoshop,
  AdobeAI: SiAdobeillustrator,
  AndroidStudio: SiAndroidstudio,
  Postman: SiPostman,
  VSCode: SiVisualstudiocode,
  FramerMotion: TbBrandFramerMotion,
  ExpressJs: SiExpress,
  ShadcnUi: SiShadcnui,
};

function SkillList({ list }) {
  return (
    <motion.div
      className="skillList"
      whileHover={{
        scale: 1.1,
        rotateX: 5,
        rotateY: 25,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 300,
        },
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <h2>{list.title}</h2>
      <div className="listContent">
        {list.skills.map((item) => (
          <SkillItem key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillItem({ item }) {
  const IconComponent = iconMap[item.name];

  return (
    <div className="skillItem">
      {IconComponent ? (
        <IconComponent color={item.color} size={"20px"} />
      ) : (
        <img src={item.image} alt="" />
      )}

      <p>{item.name}</p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <div className="wrapper">
        <h1>Skills</h1>
        <p>
          Here are some of my skills on which I have been working on for the
          past two years.
        </p>
        <div className="skillContainer">
          {data.map((list) => (
            <SkillList key={list.title} list={list} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
Skills;
