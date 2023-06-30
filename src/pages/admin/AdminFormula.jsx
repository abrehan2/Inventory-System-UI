// IMPORTS -
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MetaData from "../../helpers/MetaData";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader";
import {
  clearErrors,
  clearMessages,
  getAdminFormula,
} from "../../redux/actions/admin-actions/formulaAdminAction";
import AdminFormulaTable from "../../components/admin-components/AdminFormulaTable";
import { ADMIN_FORMULA_UPDATE_RESET } from "../../helpers/Constants";
import "../../styles/adminFormula.css";

const AdminFormula = () => {
  const dispatch = useDispatch();
  const { error, loading, formulas, message, isUpdated } = useSelector(
    (state) => state.ADMIN_FORMULA
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

    if (isUpdated) {
      dispatch({
        type: ADMIN_FORMULA_UPDATE_RESET,
      });
    }

    dispatch(getAdminFormula());
  }, [dispatch, error, message, isUpdated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`Formula`} />
          <Container fluid className="admin__formula__parent">
            <Row className="admin__formula__secondary">
              <Col md={true} className="admin__formula__child">
                <div className="admin__formula__content">
                  <h3>Formula</h3>
                </div>

                <div className="admin__formula__box">
                  <AdminFormulaTable formulas={formulas && formulas} />
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default AdminFormula;
