// IMPORTS -
import React, { useEffect, useState } from "react";
import MetaData from "../helpers/MetaData";
import { Container, Row, Col, Stack, Form } from "react-bootstrap";
import * as Fa6 from "react-icons/fa6";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, FormLabel, Button, Input } from "@chakra-ui/react";
import {
  clearErrors,
  loadUser,
  updateProfile,
  updatePassword,
} from "../redux/actions/userAction";
import {
  UPDATE_PROFILE_RESET,
  UPDATE_PASSWORD_RESET,
} from "../helpers/Constants";
import "../styles/profile.css";

const Profile = () => {
  const { isUpdated, error, isPassUpdated } = useSelector(
    (state) => state.PROFILE
  );
  const { user } = useSelector((state) => state.USER);
  const [visible, setVisible] = useState(true);
  const [visiblePass, setVisiblePass] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const profileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);

    dispatch(updateProfile(myForm));
  };

  const updatePasswordHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(updatePassword(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Profile has been updated");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });

      dispatch(loadUser());
    }

    if (user) {
      setName(user?.name);
      setEmail(user?.email);
    }

    if (isPassUpdated) {
      toast.success("Password has been updated");
      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });

      dispatch(loadUser());
    }
  }, [dispatch, error, isUpdated, user, isPassUpdated]);

  return (
    <>
      <MetaData title={`${user?.name}'s profile`} />
      <Container fluid className="profile__parent">
        <Row className="profile__secondary">
          <Col className="profile__child" md={true}>
            <div className="profile__content">
              <h3>Profile</h3>
            </div>

            <Stack className="profile__Stack">
              {visiblePass ? (
                <Form
                  className="profile__form"
                  autoComplete="off"
                  onSubmit={profileSubmit}
                >
                  <div className="profile__box profile__top__btn">
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

                  <div className="profile__box">
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

                  <div className="profile__box">
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

                  <div className="profile__box profile__button__box">
                    <Button
                      type="button"
                      colorScheme="blue"
                      isDisabled={visible}
                      onClick={() => setVisiblePass(false)}
                    >
                      Update password
                    </Button>
                    <Button
                      type="submit"
                      colorScheme="blue"
                      isDisabled={visible}
                    >
                      Save
                    </Button>
                  </div>
                </Form>
              ) : (
                <Form
                  className="profile__form"
                  autoComplete="off"
                  onSubmit={updatePasswordHandler}
                >
                  <div className="profile__box">
                    <FormControl>
                      <FormLabel>Current password</FormLabel>
                      <Input
                        type="password"
                        isDisabled={visible}
                        onChange={(e) => setOldPassword(e.target.value)}
                        value={oldPassword}
                      />
                    </FormControl>
                  </div>

                  <div className="profile__box">
                    <FormControl>
                      <FormLabel>New password</FormLabel>
                      <Input
                        type="password"
                        isDisabled={visible}
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                      />
                    </FormControl>
                  </div>

                  <div className="profile__box">
                    <FormControl>
                      <FormLabel>Confirm password</FormLabel>
                      <Input
                        type="password"
                        isDisabled={visible}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                      />
                    </FormControl>
                  </div>

                  <div className="profile__box profile__button__box">
                    <Button
                      type="button"
                      colorScheme="blue"
                      isDisabled={visible}
                      onClick={() => setVisiblePass(true)}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      colorScheme="blue"
                      isDisabled={visible}
                    >
                      Change now
                    </Button>
                  </div>
                </Form>
              )}
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
