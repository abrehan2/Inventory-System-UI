// IMPORTS -
import { Container, Row, Col } from "react-bootstrap";
import { GridLoader } from "react-spinners";
import "../styles/loader.css";

const Loader = () => {
  return (
    <>
      <Container fluid className="loader__parent">
        <Row className="loader__secondary">
          <Col md={true} className="loader__child">
            <GridLoader color="#fd7e14" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Loader;
