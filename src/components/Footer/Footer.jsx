import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../../images/logo.svg";
import "./Footer.css";

function Footer() {
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
    <motion.footer className="footer" initial="hidden" whileInView="visible">
      <div className="footer__content">
        <div className="footer__container">
          <motion.img
            className="footer__logo"
            src={logo}
            alt="logo"
            custom={1}
            variants={topToDownAnimation}
          />
          <div className="footer__wrap">
            <div className="footer__wrapper">
              <motion.h1
                className="footer__title"
                custom={1.5}
                variants={topToDownAnimation}
              >
                Меню
              </motion.h1>
              <NavLink className="footer__link" to="/">
                <motion.h2
                  className="footer__subtitle"
                  custom={2}
                  variants={topToDownAnimation}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ easeInOut: "linear" }}
                >
                  Главная
                </motion.h2>
              </NavLink>
              <NavLink className="footer__link" to="/bearings">
                <motion.h2
                  className="footer__subtitle"
                  custom={2.5}
                  variants={topToDownAnimation}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ easeInOut: "linear" }}
                >
                  Подшипники
                </motion.h2>
              </NavLink>
              <motion.h2
                className="footer__subtitle"
                custom={3}
                variants={topToDownAnimation}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ easeInOut: "linear" }}
                style={{
                  cursor: "pointer",
                }}
              >
                <Link
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Контакты
                </Link>
              </motion.h2>
            </div>
            <div className="footer__wrapper">
              <motion.h1
                className="footer__title"
                custom={1.5}
                variants={topToDownAnimation}
              >
                ТОО СЗПК
              </motion.h1>
              <motion.h2
                className="footer__subtitle"
                custom={2}
                variants={topToDownAnimation}
              >
                Адрес
              </motion.h2>
              <motion.h2
                className="footer__subtitle"
                custom={2.5}
                variants={topToDownAnimation}
              >
                "проспект Мира 1001"
              </motion.h2>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_author">
        <motion.p
          className="footer_author_text"
          custom={3}
          variants={topToDownAnimation}
        >
          © 2023 SZPK. Все права защищены.
        </motion.p>
        <motion.p
          className="footer_author__title"
          custom={3}
          variants={topToDownAnimation}
        >
          Разработчик сайта:{" "}
          <motion.a
            className="footer_author__link"
            href="https://rodya.kz/"
            target="_blank"
            rel="noreferrer"
          >
            rodya.kz
          </motion.a>
        </motion.p>
      </div>
    </motion.footer>
  );
}

export default Footer;
