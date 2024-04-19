import React from "react";
import "../components/footer.css";
import { Col, Image, Row, Stack } from "react-bootstrap";
import logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <>
      <hr className="horizontal-line" />
      <div className="footer-style">
        <div className="center">
          <Image src={logo} alt="website logo" />
          <p className="footer-text">
            We are an agency that services premium clients for their
            requirements around sports, music, entertainment & bespoke
            experiences. Our team of experienced sports travel professionals
            will ensure an unforgettable experience for you and guests at the
            event of your choice.
          </p>
        </div>
        <hr className="horizontal-bottom" />
      </div>
      <div className="footer-last-style">
        <Row>
          <Col lg={3} sm={12} md={6}>
            <p className="footer-text-two">Quick Pages</p>
            <Stack className="footer-text-three" gap={1}>
              <span>Home</span>
              <span>About Us</span>
              <span>Blogs</span>
              <span>Case Studies</span>
              <span>Contact Us</span>
            </Stack>
          </Col>
          <Col lg={3} sm={12} md={6}>
            <p className="footer-text-two">Tickets</p>
            <Stack className="footer-text-three" gap={1}>
              <span>Football</span>
              <span>Cricket</span>
              <span>Motosports</span>
              <span>Tennis</span>
              <span>Golf</span>
              <span>Rugby</span>
              <span>Olympic</span>
              <span>Others</span>
            </Stack>
          </Col>
          <Col lg={2} sm={12} md={6}>
            <p className="footer-text-two">Services</p>
            <Stack className="footer-text-three" gap={1}>
              <span>Sports</span>
              <span>Entertainment</span>
              <span>Bespoke Travel</span>
              <span>Business</span>
            </Stack>
          </Col>
          <Col lg={4} sm={12} md={6}>
            <p className="footer-text-two">Contact</p>
            <Stack className="footer-text-three" gap={1}>
              <span>+91 96639 21770</span>
              <span>info@gainaccess.in</span>
              <span>
                #439, 3rd floor, Sipani East Avenue, 18th main, Koramangala 6th
                block, Bangalore - 560095, India
              </span>
            </Stack>
          </Col>
        </Row>
      </div>
      <div className="footerbar"></div>
    </>
  );
};

export default Footer;
