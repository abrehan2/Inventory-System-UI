// IMPORTS -
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MetaData from "../helpers/MetaData";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import BatchTable from "../components/BatchTable";
import {
  getBatch,
  clearErrors,
  clearMessages,
} from "../redux/actions/formulaAction";
import "../styles/batches.css";

const Batches = () => {
  const dispatch = useDispatch();
  const { batch, loading, error, message } = useSelector(
    (state) => state.FORMULA
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      toast.success(message);
      dispatch(clearMessages());
    }

    dispatch(getBatch());
  }, [dispatch, error, message]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Batches"} />
          <Container fluid className="batches__parent">
            <Row className="batches__secondary">
              <Col className="batches__child" md={true}>
                <div className="batches__content">
                  <h3>Batches</h3>
                </div>
                <div className="batches__box">
                  <BatchTable batch={batch} />
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Batches;
