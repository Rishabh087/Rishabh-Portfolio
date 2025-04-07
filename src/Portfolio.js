import React from 'react';
import './index.css';

export default function Portfolio() {
  return (
    <div className="portfolio">
      <section className="header">
        <h1>Hi, I'm Rishabh Pandey</h1>
        <p>
          B.Tech ECE student passionate about full-stack development. Skilled in React, Node.js,
          Express, MongoDB, and experienced in building real-world applications with strong DSA knowledge.
        </p>
        <a href="/Rishabh_Pandey_CV_2025_NEW.pdf" className="resume-btn" download>
          Download Resume
        </a>
      </section>

      <section className="tech-stack">
        <h2>Tech Stack</h2>
        <ul className="tech-list">
          <li>C/C++</li>
          <li>Python</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Redux.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>

        <div className="project">
          <h3><a href='https://github.com/Rishabh087/Amazon-Clone' class="a-c">Amazon Clone(Frontend)</a></h3>
          <p>Built the front-end layout of Amazon using HTML, CSS, and JavaScript. Though not fully responsive, this project helped me strengthen my understanding of layout design, CSS positioning, and DOM manipulation, while applying the core concepts I learned in real-world UI implementation.</p>
        </div>

        <div className="project">
          <h3><a href='https://github.com/Rishabh087/4js-p4-guess-the-number-game' class="a-c">Guess the Number Game</a></h3>
          <p>Created an interactive number guessing game with JavaScript. Features include randomized number generation, real-time feedback, scoring logic, and dynamic DOM manipulation to enhance user experience.</p>
        </div>

        <div className="project">
          <h3>Food Delivery App - BITE BOX(Currently working) </h3>
          <p>A modern, config-driven Food Delivery Web App built with React and Tailwind CSS. Designed with scalability in mind, it features a dynamic UI powered by reusable components and configuration-based rendering — making it super easy to add or update menu items, categories, and more without touching the core code!</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact: 8303068952</h2>
        <p>Email: rishabhpandey151220012@gamil.com</p>
        <a href='https://www.linkedin.com/in/rishabh-pandey-5aa310262/' class="a-c">Linkedin</a><br/>
        <a href='https://github.com/Rishabh087' class="a-c">GitHub</a>
      </section>
    </div>
  );
}
