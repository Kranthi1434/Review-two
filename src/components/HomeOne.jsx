import React from "react";
import { Button, Row, Col, Image, Container } from "react-bootstrap";
import "../components/homeOne.css";
import logoContainer from "../assets/images/premier1.png";
import logoContainerTwo from "../assets/images/Logo container.png";
import logoContainerThree from "../assets/images/Logo container1.png";
import { BiMap } from "react-icons/bi";

const HomeOne = () => {
  let iconStyles = {
    backgroundColor: "rgba(43, 42, 42, 0.2)",
    marginRight: "5px",
    fontSize: "30px",
  };
  return (
    <>
      <div className="football-page ">
        <span className="football-heding">FOOTBAL</span>
        <Button className="event-btn">All Events</Button>
      </div>
      <p className="football-text">
        Secure your spot in the heart of the action and create lasting memories
        with our unrivaled <br /> selection of tickets, ensuring you never miss
        a moment of the excitement.
      </p>
      <div className="football-image">
        <Row>
          <Col lg={6} sm={12} xs={12} md={12}>
            <div className="container">
              <div class="blur">
                <Image
                  className="premier-one"
                  src={logoContainer}
                  alt="logoimage"
                />
                <span className="premier-text">PREMIER LEAGUE</span>
                <p className="qatar-text">
                  <BiMap color="white" style={iconStyles} />
                  Qatar
                </p>
                <Button className="btn-style">View details</Button>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12} xs={12} md={12}>
            <div className="container">
              <div class="blur">
                <Image
                  className="premier-one"
                  src={logoContainerTwo}
                  alt="logoimage"
                />
                <span className="premier-text">LA LIGA</span>
                <p className="qatar-text">
                  <BiMap color="white" style={iconStyles} />
                  United Kingdom
                </p>
                <Button className="btn-style">View details</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} sm={12} xs={12} md={12}>
            <div className="container">
              <div class="blur">
                <Image
                  className="premier-one"
                  src={logoContainerThree}
                  alt="logoimage"
                />
                <span className="premier-text">LIGUE 1</span>
                <p className="qatar-text">
                  <BiMap color="white" style={iconStyles} />
                  Germany
                </p>
                <Button className="btn-style">View details</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomeOne;
//https://stackblitz.com/edit/vitejs-vite-ut2pbv?file=src%2FApp.jsx
{
  /* <Image src={quater} alt='premier league'/>
<div class="blur">
  <h2> Blurred background image </h2>
</div> */
}
