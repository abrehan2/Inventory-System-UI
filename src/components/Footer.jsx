// IMPORTS -
import { Container, Row, Col } from "react-bootstrap";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <Container fluid className="footer__parent">
        <Row className="footer__secondary">
          <Col md={true} className="footer__child">
            <footer className="footer">
              <div className="footer__content">
                <p>© 2023 HiClass Feed. All rights reserved</p>
              </div>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
