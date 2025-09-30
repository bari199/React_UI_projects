import React from "react";
import "./skills.css";
import UI from "../../assets/ui-design.png";
import Website from "../../assets/website-design.png";
import App from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do </span>
      <span className="skillDesc">
       I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UI} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX design</h2>
            <p>This is demo text can be changed while making the production ready
            website. </p>
          </div>
        </div>
      <div className="skillBar">
        <img src={Website} alt="WebsiteDesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Website Design</h2>
          <p>
            This is demo text can be changed while making the production ready
            website.
          </p>
        </div>
      </div>
      <div className="skillBar">
        <img src={App} alt="AppDesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2>App Design </h2>
          <p>This is demo text can be changed while making the production ready
            website.</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
