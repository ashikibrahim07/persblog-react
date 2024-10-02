import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css"; // Import custom CSS

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:ashikibrahim7777@gmail.com";
  };

  return (
    <div className="cnt">
      <div className="contact-card">
        <h1 className="contact-title">Let’s Connect</h1>

        <p className="contact-text">
          I would love to hear from you! Whether you have a question, feedback,
          or just want to say hello, feel free to reach out to me via email or
          on social media.
        </p>

        <div className="icon-btns">
          <a
            href="https://github.com/ashikibrahim07"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn icon-btn me-3 github"
          >
            <FaGithub />
          </a>
        </div>

        <button onClick={handleEmailClick} className="send-email-btn mt-4">
          Send Me an Email
        </button>
      </div>
    </div>
  );
};

export default Contact;
