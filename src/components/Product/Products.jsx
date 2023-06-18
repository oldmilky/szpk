import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import arrow_down from "../../images/arrow_down.svg";
import arrow_up from "../../images/arrow_up.svg";
import type1 from "../../images/type1.svg";
import type2 from "../../images/type2.svg";
import type3 from "../../images/type3.svg";
import type4 from "../../images/type4.svg";
import type5 from "../../images/type5.svg";
import type6 from "../../images/type6.svg";
import "./Products.css";

function Products() {
  const [bearing, setBearing] = useState(false);
  const [bearing2, setBearing2] = useState(false);
  const [bearing3, setBearing3] = useState(false);
  const [bearing4, setBearing4] = useState(false);
  const [bearing5, setBearing5] = useState(false);
  const [bearing6, setBearing6] = useState(false);

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
    <motion.section className="products" initial="hidden" whileInView="visible">
      <div className="products__container">
        <motion.h1
          className="products__title"
          custom={1}
          variants={topToDownAnimation}
        >
          Подшипники можно классифицировать на следующие основные типы:
        </motion.h1>
        <motion.div
          className="products__wrap"
          custom={1.5}
          variants={topToDownAnimation}
        >
          <div
            className="products__wrapper"
            onClick={() => setBearing(!bearing)}
          >
            {bearing === true ? (
              <motion.img
                className="products__arrow_up"
                src={arrow_up}
                alt="arrow up"
              />
            ) : (
              <motion.img
                className="products__arrow_down"
                src={arrow_down}
                alt="arrow down"
              />
            )}
            <h2 className="products__subtitle">Шарикоподшипники</h2>
          </div>
          <AnimatePresence initial={false} onExitComplete={() => null}>
            {bearing && (
              <motion.div
                className="products__list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "tween",
                }}
              >
                <img className="products__image" src={type1} alt="product" />
                <p className="products__text">
                  Самый распространенный тип подшипников, использующий шарики
                  для передачи нагрузки. Они могут поддерживать радиальные и
                  осевые нагрузки и имеют малые коэффициенты трения.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="products__wrap"
          custom={2}
          variants={topToDownAnimation}
        >
          <div
            className="products__wrapper"
            onClick={() => setBearing2(!bearing2)}
          >
            {bearing2 === true ? (
              <img
                className="products__arrow_up"
                src={arrow_up}
                alt="arrow up"
              />
            ) : (
              <img
                className="products__arrow_down"
                src={arrow_down}
                alt="arrow down"
              />
            )}
            <h2 className="products__subtitle">Роликовые подшипники</h2>
          </div>
          <AnimatePresence initial={false} onExitComplete={() => null}>
            {bearing2 && (
              <motion.div
                className="products__list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "tween",
                }}
              >
                <img className="products__image" src={type2} alt="product" />
                <p className="products__text">
                  В эту категорию входят различные типы подшипников, включая
                  цилиндрические, игольчатые, конические и сферические роликовые
                  подшипники. Они обеспечивают высокую грузоподъемность и могут
                  работать при высоких скоростях.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="products__wrap"
          custom={2.5}
          variants={topToDownAnimation}
        >
          <div
            className="products__wrapper"
            onClick={() => setBearing3(!bearing3)}
          >
            {bearing3 === true ? (
              <img
                className="products__arrow_up"
                src={arrow_up}
                alt="arrow up"
              />
            ) : (
              <img
                className="products__arrow_down"
                src={arrow_down}
                alt="arrow down"
              />
            )}
            <h2 className="products__subtitle">
              Самоустанавливающиеся подшипники
            </h2>
          </div>
          <AnimatePresence initial={false} onExitComplete={() => null}>
            {bearing3 && (
              <motion.div
                className="products__list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "tween",
                }}
              >
                <img className="products__image" src={type3} alt="product" />
                <p className="products__text">
                  Эти подшипники имеют специальную конструкцию, которая
                  позволяет им компенсировать небольшие отклонения в
                  выравнивании вала. Они удобны в использовании и обеспечивают
                  надежную работу при неблагоприятных условиях.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="products__wrap"
          custom={3}
          variants={topToDownAnimation}
        >
          <div
            className="products__wrapper"
            onClick={() => setBearing4(!bearing4)}
          >
            {bearing4 === true ? (
              <img
                className="products__arrow_up"
                src={arrow_up}
                alt="arrow up"
              />
            ) : (
              <img
                className="products__arrow_down"
                src={arrow_down}
                alt="arrow down"
              />
            )}
            <h2 className="products__subtitle">Упорные подшипники</h2>
          </div>
          <AnimatePresence initial={false} onExitComplete={() => null}>
            {bearing4 && (
              <motion.div
                className="products__list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "tween",
                }}
              >
                <img className="products__image" src={type4} alt="product" />
                <p className="products__text">
                  Применяются для передачи осевых нагрузок и могут быть
                  шариковыми или роликовыми. Они способны выдерживать
                  значительные осевые нагрузки и используются, например, в
                  автомобильных трансмиссиях.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="products__wrap"
          custom={3.5}
          variants={topToDownAnimation}
        >
          <div
            className="products__wrapper"
            onClick={() => setBearing5(!bearing5)}
          >
            {bearing5 === true ? (
              <img
                className="products__arrow_up"
                src={arrow_up}
                alt="arrow up"
              />
            ) : (
              <img
                className="products__arrow_down"
                src={arrow_down}
                alt="arrow down"
              />
            )}
            <h2 className="products__subtitle">Линейные подшипники</h2>
          </div>
          <AnimatePresence initial={false} onExitComplete={() => null}>
            {bearing5 && (
              <motion.div
                className="products__list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "tween",
                }}
              >
                <img className="products__image" src={type5} alt="product" />
                <p className="products__text">
                  Используются для передвижения объектов вдоль линии. Они могут
                  быть шариковыми или роликовыми и обеспечивают плавное и точное
                  перемещение.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="products__wrap"
          custom={4}
          variants={topToDownAnimation}
        >
          <div
            className="products__wrapper"
            onClick={() => setBearing6(!bearing6)}
          >
            {bearing6 === true ? (
              <img
                className="products__arrow_up"
                src={arrow_up}
                alt="arrow up"
              />
            ) : (
              <img
                className="products__arrow_down"
                src={arrow_down}
                alt="arrow down"
              />
            )}
            <h2 className="products__subtitle">Подшипники скольжения</h2>
          </div>
          <AnimatePresence initial={false} onExitComplete={() => null}>
            {bearing6 && (
              <motion.div
                className="products__list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "tween",
                }}
              >
                <img className="products__image" src={type6} alt="product" />
                <p className="products__text">
                  Также известны как буксовые подшипники. Они не используют
                  шарики или ролики, а основаны на принципе скольжения между
                  двумя поверхностями. Они применяются, например, в двигателях
                  внутреннего сгорания.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Products;
