import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

function Contact() {
  //   const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  //   const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      //   ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      //   animate="animate"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Get in Touch!</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <p>wen.bufan11@gmail.com</p>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Address</h2>
          <p>Bruce, Canberra</p>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="emailSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <svg viewBox="0 0 24 24">
            <motion.path
              fill="none"
              strokeWidth={0.1}
              initial={{ pathLength: 0 }}
              //   animate={isInView && { pathLength: 1 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
              d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
              stroke="orange"
            />
          </svg>
        </motion.div>
        <motion.form
          onSubmit={sendEmail}
          ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea rows={8} placeholder="Message" name="message" required />
          <button>Send</button>
          {error && "Failed"}
          {success && "Succeed"}
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
