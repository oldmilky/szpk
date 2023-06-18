import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import checkbox from "../../images/checkbox.svg";
import closeButton from "../../images/close.svg";
import telegram from "../../images/telegram.svg";
import whatsapp from "../../images/whatsapp.svg";
import "./Contacts.css";

function Contacts() {
  // const [clickText, setClickText] = useState(false);

  const form = useRef();

  const [modalSuccessful, setModalSuccessful] = useState(false);

  useEffect(() => {
    if (modalSuccessful) {
      const timeoutId = setTimeout(() => {
        setModalSuccessful(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [modalSuccessful]);

  // const [modalWrong, setModalWrong] = useState(false);

  // useEffect(() => {
  //   if (modalWrong) {
  //     const timeoutId = setTimeout(() => {
  //       setModalWrong(false);
  //     }, 5000);

  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [modalWrong]);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1pgp8f3",
        "template_ol8g0yy",
        form.current,
        "FP8kjRjejt7Zi5Owr"
      )
      .then(
        result => {
          console.log(result.text);
          setModalSuccessful(true);
          form.current.reset();
        },
        error => {
          setModalSuccessful(true);
          console.log(error.text);
        }
      );
  };

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

  const dropInPopup = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: 0,
      opacity: 0,
    },
  };

  return (
    <motion.section
      className="contacts"
      id="contacts"
      initial="hidden"
      whileInView="visible"
      name="aboutme"
    >
      <div className="contacts__container">
        <div className="contacts__wrap">
          <div className="contacts__wrapper">
            <motion.h2
              className="contacts__subtitle"
              custom={1}
              variants={topToDownAnimation}
            >
              Контакты
            </motion.h2>
            <div className="contacts__connect">
              <motion.a
                className="contacts__link"
                href="https://t.me/rodion914"
                target="_blank"
                rel="noreferrer"
                custom={1.5}
                variants={topToDownAnimation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ easeInOut: "linear" }}
              >
                <div className="contacts__connect_wrap">
                  <div className="contacts__connect_wrapper">
                    <img
                      className="contacts__logo"
                      src={telegram}
                      alt="linked"
                    />
                  </div>
                  <p className="contacts__text">TELEGRAM</p>
                </div>
              </motion.a>
              <motion.a
                className="contacts__link"
                href="https://linkedin.com/in/родион-стрелков-959953239"
                target="_blank"
                rel="noreferrer"
                custom={2}
                variants={topToDownAnimation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ easeInOut: "linear" }}
              >
                <div className="contacts__connect_wrap">
                  <div className="contacts__connect_wrapper">
                    <img
                      className="contacts__logo"
                      src={whatsapp}
                      alt="linked"
                    />
                  </div>
                  <p className="contacts__text">Whats App</p>
                </div>
              </motion.a>
            </div>
          </div>
          <div className="contacts__wrapper">
            <motion.h2
              className="contacts__subtitle"
              custom={1}
              variants={topToDownAnimation}
            >
              Написать нам
            </motion.h2>
            <form
              className="contacts__send_wrap"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="contacts__send_wrapper">
                <motion.input
                  className="contacts__input contacts__input_name"
                  placeholder="Имя"
                  type="text"
                  name="user_name"
                  custom={1.5}
                  variants={topToDownAnimation}
                  whileTap={{ scale: 0.9 }}
                  transition={{ easeInOut: "linear" }}
                />
                <motion.input
                  className="contacts__input contacts__input_email"
                  placeholder="Почта"
                  type="email"
                  name="user_email"
                  custom={2}
                  variants={topToDownAnimation}
                  whileTap={{ scale: 0.9 }}
                  transition={{ easeInOut: "linear" }}
                />
              </div>
              <motion.input
                className="contacts__input contacts__input_title"
                placeholder="Заголовок"
                name="message1"
                type="text"
                custom={2.5}
                variants={topToDownAnimation}
                whileTap={{ scale: 0.9 }}
                transition={{ easeInOut: "linear" }}
              />
              <motion.div
                className="contacts__inputs"
                custom={3}
                variants={topToDownAnimation}
                whileTap={{ scale: 0.9 }}
                transition={{ easeInOut: "linear" }}
              >
                <textarea
                  className="contacts__input contacts__input_message"
                  placeholder="Сообщение"
                  name="message2"
                />
              </motion.div>
              <motion.input
                className="contacts__button"
                type="submit"
                value="Отправить"
                placeholder="Отправить"
                custom={3.5}
                variants={topToDownAnimation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ easeInOut: "linear" }}
              />
            </form>
          </div>
        </div>
        <AnimatePresence initial={false} onExitComplete={() => null}>
          {modalSuccessful && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="alert"
                variants={dropInPopup}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="alert__container succesful">
                  <div className="alert__wrapper">
                    <img
                      className="alert__checkbox"
                      src={checkbox}
                      alt="checkbox"
                    />
                    <div className="alert__wrap">
                      <h1 className="alert__title">Форма успешно отправлена!</h1>
                      <h2 className="alert__subtitle">Ожидайте ответа в течении 12 часов</h2>
                    </div>
                  </div>
                  <img
                    className="alert__close"
                    src={closeButton}
                    alt="close"
                    onClick={() => setModalSuccessful(false)}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/*
        <AnimatePresence initial={false} onExitComplete={() => null}>
            {modalWrong && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="alert"
                  variants={dropInPopup}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="alert__container wrong">
                    <div className="alert__wrapper">
                      <img
                        className="alert__checkbox"
                        src={wrong}
                        alt="wrong"
                      />
                      <div className="alert__wrap">
                        <h1 className="alert__title">{t("alert.alert3")}</h1>
                        <h2 className="alert__subtitle">{t("alert.alert4")}</h2>
                      </div>
                    </div>
                    <img
                      className="alert__close"
                      src={closeButton}
                      alt="close"
                      onClick={() => setModalWrong(false)}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence> */}
      </div>
    </motion.section>
  );
}

export default Contacts;
