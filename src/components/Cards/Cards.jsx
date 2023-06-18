import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import card2 from "../../images/cards2.svg";
import card3 from "../../images/cards3.svg";
import card4 from "../../images/cards4.svg";
import card1 from "../../images/product1.svg";
import "./Cards.css";

function Cards() {
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
    <motion.section className="cards" initial="hidden" whileInView="visible">
      <div className="cards__container">
        <motion.h1
          className="cards__title"
          custom={1}
          variants={topToDownAnimation}
        >
          Наша продукция
        </motion.h1>
        <div className="cards__cards">
          <motion.div
            className="cards__card"
            custom={1.5}
            variants={topToDownAnimation}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            transition={{ easeInOut: "linear" }}
          >
            <NavLink className="cards__link" to="/bearings">
              <div className="cards__card_image" style={{
                  backgroundImage: `url(${card1})`,
                }}>
                <div className="cards__wrap">
                  <h2 className="cards__subtitle">Глубошариковые</h2>
                  <h3 className="cards__text">Подшипники</h3>
                </div>
              </div>
            </NavLink>
          </motion.div>

          <motion.div
            className="cards__card"
            custom={2}
            variants={topToDownAnimation}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            transition={{ easeInOut: "linear" }}
          >
            <NavLink className="cards__link" to="/bearings">
              <div className="cards__card_image" style={{
                  backgroundImage: `url(${card2})`,
                }}>
                <div className="cards__wrap">
                  <h2 className="cards__subtitle">Роликовый</h2>
                  <h3 className="cards__text">Подшипники</h3>
                </div>
              </div>
            </NavLink>
          </motion.div>

          <motion.div
            className="cards__card"
            custom={2.5}
            variants={topToDownAnimation}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            transition={{ easeInOut: "linear" }}
          >
            <NavLink className="cards__link" to="/bearings">
              <div className="cards__card_image" style={{
                  backgroundImage: `url(${card3})`,
                }}>
                <div className="cards__wrap">
                  <h2 className="cards__subtitle">Упорный</h2>
                  <h3 className="cards__text">Подшипники</h3>
                </div>
              </div>
            </NavLink>
          </motion.div>

          <motion.div
            className="cards__card"
            custom={3}
            variants={topToDownAnimation}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            transition={{ easeInOut: "linear" }}
          >
            <NavLink className="cards__link" to="/bearings">
              <div className="cards__card_image" style={{
                  backgroundImage: `url(${card4})`,
                }}>
                <div className="cards__wrap">
                  <h2 className="cards__subtitle">Линейный</h2>
                  <h3 className="cards__text">Подшипники</h3>
                </div>
              </div>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Cards;
