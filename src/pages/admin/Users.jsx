// IMPORTS -
import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import MetaData from "../../helpers/MetaData";
import UserTable from "../../components/admin-components/UserTable";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdminUsers,
  clearErrors,
  clearMessages,
} from "../../redux/actions/admin-actions/userAdminAction";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import { Pagination as Page } from "antd";
import "../../styles/users.css";

const Users = () => {
  const { users, userCount, error, loading, message, resultPerPage } =
    useSelector((state) => state.ADMIN_USERS);

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      toast.success(message);
      dispatch(clearMessages());
    }

    dispatch(getAdminUsers());
  }, [dispatch, error, message]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Users"} />
          <Container fluid className="users__parent">
            <Row className="users__secondary">
              <Col className="users__child" md={true}>
                <div className="users__content">
                  <h3>Users</h3>
                </div>

                <div className="users__box">
                  <UserTable users={users && users} />
                </div>

                <div className="users__pagination__Box">
                  <Page
                    defaultCurrent={currentPage}
                    total={userCount}
                    onChange={setCurrentPageNo}
                    defaultPageSize={resultPerPage}
                    responsive={true}
                    className="page"
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

export default Users;
