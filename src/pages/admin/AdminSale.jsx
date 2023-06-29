// IMPORTS -
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MetaData from "../../helpers/MetaData";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader";
import AdminSaleTable from "../../components/admin-components/AdminSaleTable";
import {
  clearErrors,
  clearMessages,
  getAdminSales,
} from "../../redux/actions/admin-actions/salesAdminAction";
import "../../styles/adminSale.css";

const AdminSale = () => {
  const { sales, error, loading, message } = useSelector(
    (state) => state.ADMIN_SALES
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      toast.success(message);
      dispatch(clearMessages());
    }

    dispatch(getAdminSales());
  }, [dispatch, error, message]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`Sales`} />
          <Container fluid className="admin__sales__parent">
            <Row className="admin__sales__secondary">
              <Col md={true} className="admin__sales__child">
                <div className="admin__sales__content">
                  <h3>Sales</h3>
                </div>

                <div className="admin__sales__box">
                  <AdminSaleTable sales={sales && sales} />
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default AdminSale;
