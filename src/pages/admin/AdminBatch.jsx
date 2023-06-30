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
  getAdminBatches,
} from "../../redux/actions/admin-actions/batchAdminAction";
import AdminBatchTable from "../../components/admin-components/AdminBatchTable";
import { ADMIN_BATCHES_UPDATE_RESET } from "../../helpers/Constants";
import "../../styles/adminBatch.css";

const AdminBatch = () => {
  const dispatch = useDispatch();
  const { error, loading, batches, message, isUpdated } = useSelector(
    (state) => state.ADMIN_BATCHES
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
        type: ADMIN_BATCHES_UPDATE_RESET,
      });
    }

    dispatch(getAdminBatches());
  }, [message, error, dispatch, isUpdated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`Formula`} />
          <Container fluid className="admin__batch__parent">
            <Row className="admin__batch__secondary">
              <Col md={true} className="admin__batch__child">
                <div className="admin__batch__content">
                  <h3>Batches</h3>
                </div>

                <div className="admin__batch__box">
                  <AdminBatchTable batches={batches && batches} />
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default AdminBatch;
