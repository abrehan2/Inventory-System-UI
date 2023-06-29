// IMPORTS -
import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import MetaData from "../../helpers/MetaData";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import * as Fa6 from "react-icons/fa6";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import {
  getAdminUser,
  updateAdminUsers,
  clearErrors,
} from "../../redux/actions/admin-actions/userAdminAction";
import { UPDATE_ADMIN_USER_RESET } from "../../helpers/Constants";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import "../../styles/updateUser.css";

const UpdateUser = () => {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  const { user, error, isUpdated, loading } = useSelector(
    (state) => state.ADMIN_USERS
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { id } = useParams();

  const submitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("role", role);

    dispatch(updateAdminUsers(myForm, id));
    setVisible(true);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Profile has been updated");

      dispatch({
        type: UPDATE_ADMIN_USER_RESET,
      });
    }
  }, [dispatch, error, isUpdated]);

  useMemo(() => {
    dispatch(getAdminUser(id));
  }, [dispatch, id]);

  useMemo(() => {
    if (user) {
      setName(user?.name);
      setEmail(user?.email);
      setRole(user?.role);
    }
  }, [user]);

  return (
    <>
      <MetaData title={`${user?.name}'s profile`} />
      <Container fluid className="user__update__parent">
        <Row className="user__update__secondary">
          <Col md={true} className="user__update__child">
            <div className="user__update__content">
              <h3>Update User</h3>
            </div>

            {loading ? (
              <Loader />
            ) : (
              <>
                <Stack className="user__update__Stack">
                  <Form
                    className="user__update__form"
                    autoComplete="off"
                    onSubmit={submitHandler}
                  >
                    <div className="user__update__box user__update__top__btn">
                      {visible ? (
                        <Button
                          type="button"
                          colorScheme="blue"
                          onClick={() => setVisible(false)}
                        >
                          <Fa6.FaPencil />
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          colorScheme="blue"
                          onClick={() => setVisible(true)}
                        >
                          <Fa6.FaX />
                        </Button>
                      )}
                    </div>

                    <div className="user__update__box">
                      <FormControl>
                        <FormLabel>Name</FormLabel>

                        <Input
                          type="Text"
                          isDisabled={visible}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </FormControl>
                    </div>

                    <div className="user__update__box">
                      <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          isDisabled={visible}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormControl>
                    </div>

                    <div className="user__update__box">
                      <FormControl>
                        <FormLabel>Select a role</FormLabel>
                        <RadioGroup
                          onChange={(e) => setRole(e)}
                          value={role}
                          isDisabled={visible}
                        >
                          <Stack direction="row">
                            <Radio value="admin">Admin</Radio>
                            <Radio value="user">User</Radio>
                          </Stack>
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div className="user__update__box user__update__button__box">
                      <Button
                        type="submit"
                        colorScheme="blue"
                        isDisabled={visible}
                      >
                        Save
                      </Button>
                    </div>
                  </Form>
                </Stack>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UpdateUser;
