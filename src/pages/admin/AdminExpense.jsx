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
  getAdminExpense,
} from "../../redux/actions/admin-actions/expenseAdminAction";
import AdminExpenseTable from "../../components/admin-components/AdminExpenseTable";
import { UPDATE_ADMIN_EXPENSE_RESET } from "../../helpers/Constants";
import "../../styles/adminExpense.css";

const AdminExpense = () => {
  const { loading, error, expenses, totalAmount, message, isUpdated } =
    useSelector((state) => state.ADMIN_EXPENSE);
  const dispatch = useDispatch();

  // CHECK -
  let total = 0;
  total += totalAmount;

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
        type: UPDATE_ADMIN_EXPENSE_RESET,
      });
    }

    dispatch(getAdminExpense());
  }, [dispatch, error, message, isUpdated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`Expense`} />
          <Container fluid className="admin__exp__parent">
            <Row className="admin__exp__secondary">
              <Col md={true} className="admin__exp__child">
                <div className="admin__exp__content">
                  <h3>Expense</h3>
                  <h3 className="exp">Total Amount: {total}</h3>
                </div>

                <div className="admin__exp__box">
                  <AdminExpenseTable
                    expenses={expenses && expenses}
                    totalAmount={totalAmount && totalAmount}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default AdminExpense;
