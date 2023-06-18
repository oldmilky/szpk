import { motion } from "framer-motion";
import car from "../../images/car.svg";
import medal from "../../images/medal.svg";
import phone from "../../images/phone.svg";
import price from "../../images/price.svg";
import speed from "../../images/speed.svg";
import time from "../../images/time.svg";
import "./Benefits.css";

function Benefits() {
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
    <motion.section className="benefits" initial="hidden" whileInView="visible">
      <motion.h1
        className="benefits__title"
        custom={1}
        variants={topToDownAnimation}
      >
        Наши преимущества
      </motion.h1>
      <div className="benefits__content">
        <div className="benefits__container">
          <motion.div
            className="benefits__wrap"
            custom={1.5}
            variants={topToDownAnimation}
          >
            <img className="benefits__image" src={medal} alt="medal" />
            <h2 className="benefits__subtitle">Гарантии</h2>
          </motion.div>
          <motion.div
            className="benefits__wrap"
            custom={2}
            variants={topToDownAnimation}
          >
            <img className="benefits__image" src={car} alt="medal" />
            <h2 className="benefits__subtitle">Доставка</h2>
          </motion.div>
          <motion.div
            className="benefits__wrap"
            custom={2.5}
            variants={topToDownAnimation}
          >
            <img className="benefits__image" src={time} alt="medal" />
            <h2 className="benefits__subtitle">Время доставки</h2>
          </motion.div>
          <motion.div
            className="benefits__wrap"
            custom={3}
            variants={topToDownAnimation}
          >
            <img className="benefits__image" src={phone} alt="medal" />
            <h2 className="benefits__subtitle">Удобная оплата</h2>
          </motion.div>
          <motion.div
            className="benefits__wrap"
            custom={3.5}
            variants={topToDownAnimation}
          >
            <img className="benefits__image" src={price} alt="medal" />
            <h2 className="benefits__subtitle">Гибкие цены</h2>
          </motion.div>
          <motion.div
            className="benefits__wrap"
            custom={4}
            variants={topToDownAnimation}
          >
            <img className="benefits__image" src={speed} alt="medal" />
            <h2 className="benefits__subtitle">Качество доставки</h2>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Benefits;
