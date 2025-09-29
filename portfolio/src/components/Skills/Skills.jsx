import React from "react";
import "./skills.css";
import UI from '../../assets/ui.png'
import Website from '../../assets/website.jpg'
import App from '../../assets/app.jpg'


const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do </span>
      <span className="Desc">I am a Skilled and passionate with web designer with experience </span>
      <div className="skillBars">
        <div className="skillBar">
            <img src={UI} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2></h2>
                <p></p>
            </div>
        </div>
      </div>
      <div className="skillBar">
            <img src={Website} alt="WebsiteDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2></h2>
                <p></p>
            </div>
        </div>
        <div className="skillBar">
            <img src={App} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2></h2>
                <p></p>
            </div>
        </div>
        
    </section>
  );
};

export default Skills;
