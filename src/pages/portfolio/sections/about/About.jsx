import AboutImage from "../../assets/about.jpg";
import "./about.css";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "./../../commonComponent/Card";
import data from "./data";
const About = () => {
  
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__potrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data?.map((item) => {
              return ( <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
                
              </Card> 
              )
            })}
          </div>
          <p>
            Hi i am akash patel working as a fullstack developer. i have 3 year
            experience as fullstack developer i have very good practicle
            knoweldge of both frontend and backend technology. i have already
            worked in more than 4 client project.
          </p>
          
          <a href={CV} download className="btn primary">
            Download CV
            <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
