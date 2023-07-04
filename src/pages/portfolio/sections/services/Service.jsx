import data from "./data";
import Card from "./../../commonComponent/Card";
import "./service.css";

const Service = () => {
  return (
    <section id="service">
      <h2>My Services</h2>
      <p>I give u the best in all the services below</p>
      <div className="container services__container">
      {data?.map((item) => {
        return (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        );
      })}
      </div>
    </section>
  );
};

export default Service;
