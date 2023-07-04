import "./header.css";
import HeaderImage from "../../assets/header.jpg";
import data from "./data";
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header potrait" />
        </div>
        <h3>Akash Patel</h3>
         <p>
         Hi i am akash patel working as a fullstack developer. 
           i have 3 year
           experience as fullstack developer i have very good 
          practicle knoweldge
           of both frontend and backend technology. i have already worked in more
           than 4 client project.
  </p> 
        {/* <p data-aos="fade-up">
          You are a click away from building your dream website or web app. Send
          me the details of your project for a modern, mobile responsive, highly
          performant website today!
  </p> */}
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data?.map((item) => {
            return (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
