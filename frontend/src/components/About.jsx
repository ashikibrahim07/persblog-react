import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About Me</h1>

        <h3>Welcome to My Personal Blog!</h3>

        <p className="about-text">
          Hi there! I'm{" "}
          <strong>
            <a
              href="https://ashikibrahim.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              Ashik Ibrahim S
            </a>
          </strong>
          , and this is my personal blog where I share my thoughts, experiences,
          and insights on various topics that interest me.
        </p>

        <p className="about-text">
          I built this blog using a combination of{" "}
          <strong>Node.js, Express.js, React JS, CSS, and PostgreSQL</strong>.
          It has been an exciting journey exploring the world of web development
          and creating a platform to express myself.
        </p>

        <p className="about-text">
          Whether it's technology, travel, lifestyle, or anything in between,
          you'll find a mix of content that reflects my passions and interests.
          I hope you enjoy reading my posts as much as I enjoy creating them!
        </p>

        <p className="about-text">
          Feel free to explore the blog, leave comments, and reach out to me if
          you have any questions or just want to connect. I'm always happy to
          engage with my readers and fellow enthusiasts.
        </p>
      </div>
    </div>
  );
};

export default About;
