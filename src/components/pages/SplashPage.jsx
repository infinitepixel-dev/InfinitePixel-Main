import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./SplashPage.css";
import { Animated } from "react-animated-css";
import bgImage from "../../../public/nebulaBG.webp";

function SplashPage() {
  useEffect(() => {
    const headings = document.querySelectorAll("h1");

    headings.forEach(function (heading) {
      heading.classList.add(
        "animate__animated",
        "animate__fadeIn",
        "animate__duration-5s",
        "animate__delay-1s"
      );
    });
  }, []); // Add an empty dependency array if you only want this effect to run once

  return (
    <>
      <img id="bg" src={bgImage} alt="background" className="bgImage" />
      <Row className="d-flex text-center text-container bg">
        <Col className="splashHeadings">
          <Animated
            animationIn="fadeIn"
            animationInDuration={5000}
            animationInDelay={1000}
            isVisible={true}
          >
            <h1>Infinite Pixel</h1>
          </Animated>
          <Animated
            animationIn="fadeIn"
            animationInDuration={5000}
            animationInDelay={1000}
            isVisible={true}
          >
            <h1>Coming Soon</h1>
          </Animated>
        </Col>
      </Row>
    </>
  );
}

export default SplashPage;
