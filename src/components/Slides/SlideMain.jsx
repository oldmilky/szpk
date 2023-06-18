import { motion } from "framer-motion";
import "./Slides.css";

function SlideMain() {
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
      className="slide_main"
      initial="hidden"
      whileInView="visible"
    >
      <div className="slide_main__container">
        <div className="slide_main__wrap">
          <motion.h1
            className="slide_main__title"
            custom={1}
            variants={topToDownAnimation}
          >
            Производство подшипников
          </motion.h1>
          <motion.h2
            className="slide_main__subtitle"
            custom={2}
            variants={topToDownAnimation}
          >
            ТОО «СЗПК»
          </motion.h2>
        </div>
      </div>
    </motion.section>
  );
}

export default SlideMain;
