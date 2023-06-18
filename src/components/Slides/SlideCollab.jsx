import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./Slides.css";

function SlideCollab() {
  const topToDownAnimation = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <motion.section
      className="slide_collab"
      initial="hidden"
      whileInView="visible"
    >
      <div className="slide_collab__container">
        <div className="slide_collab__wrap">
          <motion.h1
            className="slide_collab__title"
            custom={1}
            variants={topToDownAnimation}
          >
            Мы всегда открыты
          </motion.h1>
          <motion.h2
            className="slide_collab__subtitle"
            custom={1.5}
            variants={topToDownAnimation}
          >
            Сотрудничество с нами
          </motion.h2>
          <motion.button
            className="slide_collab__button"
            custom={2}
            variants={topToDownAnimation}
          >
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Связаться
            </Link>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

export default SlideCollab;
