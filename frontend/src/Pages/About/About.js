import React from "react";

import "./About.css";

const About = () => {
  const dot = <i className="fas fa-check-circle"></i>;

  const style = {
    color: "#092B40",
  };
  return (
    <div className="content">
      <h1 className="title" style={style}>
        About
      </h1>
      <p className="about">
        Hi, My name is Thilakshan Baskaran. I am a Queens College graduate with
        a Computer Science degree. I have several years of experience working on
        a wide range of technologies and projects. I am eager to apply my
        academic and professional background towards employment opportunities. I
        am constantly trying to improve my knowledge set. I am fascinated by
        modern software development technologies and I am always learning them
        or building things using them. I enjoy being challenged and coming up
        with new solutions. Learning new languages and development techiniques
        are very important to me. Here are a few technologies and languages I am
        well versed in:{" "}
      </p>

      <ul className="list">
        <li>{dot} Java</li>
        <li>{dot} Spring boot</li>
        <li>{dot} Python</li>
        <li>{dot} React</li>
        <li>{dot} Node.js</li>
        <li>{dot} HTML & CSS</li>
        <li>{dot} Lisp</li>
        <li>{dot} MongoDB</li>
        <li>{dot} Firebase</li>
        <li>{dot} SQL</li>
      </ul>
    <br/>
     <footer>
     <h3 style={style}>Contact me: telakshanb@gmail.com</h3>

     </footer>

    </div>
  );
};

export default About;
