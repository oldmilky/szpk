import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header() {
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
    <motion.header className="header" initial="hidden" whileInView="visible">
      <div className="header__container">
        <motion.div
          custom={1}
          variants={topToDownAnimation}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ easeInOut: "linear" }}
        >
          <NavLink to="/">
            <img className="header__logo" src={logo} alt="logo" />
          </NavLink>
        </motion.div>
        <div className="header__wrap">
          <motion.div
            custom={1.5}
            variants={topToDownAnimation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ easeInOut: "linear" }}
          >
            <NavLink className="header__text" to="/">
              Главная
            </NavLink>
          </motion.div>
          <motion.div
            custom={2}
            variants={topToDownAnimation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ easeInOut: "linear" }}
          >
            <NavLink className="header__text" to="/bearings">
              Подшипники
            </NavLink>
          </motion.div>
          <motion.div
            custom={2.5}
            variants={topToDownAnimation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ easeInOut: "linear" }}
          >
            <Link
              className="header__text"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Контакты
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
