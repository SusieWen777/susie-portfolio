import "./skills.scss";
import { motion, useInView } from "framer-motion";
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
  SiRedux,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAndroidstudio,
  SiPostman,
  SiVisualstudiocode,
  SiExpress,
  SiShadcnui,
  SiSupabase,
  SiPrisma,
  SiClerk,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import { useRef } from "react";

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
  Supabase: SiSupabase,
  AWS: FaAws,
  Docker: FaDocker,
  Git: FaGit,
  Figma: FaFigma,
  Photoshop: SiAdobephotoshop,
  AdobeIllustrator: SiAdobeillustrator,
  AndroidStudio: SiAndroidstudio,
  Postman: SiPostman,
  VSCode: SiVisualstudiocode,
  FramerMotion: TbBrandFramerMotion,
  ExpressJs: SiExpress,
  ShadcnUi: SiShadcnui,
  Prisma: SiPrisma,
  NextJs: TbBrandNextjs,
  Clerk: SiClerk,
};

const variants = {
  initial: {
    x: 100,
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

function SkillList({ list }) {
  return (
    <motion.div
      className="skillList"
      variants={variants}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      whileHover={{
        y: -20,
        transition: {
          duration: 0.3,
          stiffness: 300,
        },
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
    <motion.div
      className="skillItem"
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 300,
        },
      }}
    >
      {IconComponent ? (
        <IconComponent color={item.color} size={"20px"} />
      ) : (
        <img src={item.image} alt="" />
      )}

      <p>{item.name}</p>
    </motion.div>
  );
}

function Skills() {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <motion.div
      className="skills"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
    >
      <motion.div className="wrapper" variants={variants}>
        <motion.h1 variants={variants}>Skills</motion.h1>
        <motion.p variants={variants}>
          Here are some of my skills on which I have been working on for the
          past two years.
        </motion.p>
        <motion.div className="skillContainer" variants={variants}>
          {data.map((list) => (
            <SkillList key={list.title} list={list} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
