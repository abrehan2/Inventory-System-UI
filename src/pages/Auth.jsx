import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Stack, Form } from "react-bootstrap";
import MetaData from "../helpers/MetaData";
import Loader from "../components/Loader";
import {
  FormControl,
  FormLabel,
  Button,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  register,
  clearErrors,
  clearMessages,
} from "../redux/actions/userAction";
import toast from "react-hot-toast";
import "../styles/auth.css";

const Auth = () => {
  const [heading, setHeading] = useState("");
  const [visible, setVisible] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const dispatch = useDispatch();
  const { error, loading, isAuth, message } = useSelector(
    (state) => state.USER
  );
  const navigate = useNavigate();

  // LOGIN HANDLER -
  const loginSubmit = (e) => {
    e.preventDefault();

    dispatch(login(loginEmail, loginPassword));
  };

  // REGISTER HANDLER -
  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", registerName);
    myForm.set("email", registerEmail);
    myForm.set("password", registerPassword);

    dispatch(register(myForm));
    setRegisterName("");
    setRegisterEmail("");
    setRegisterPassword("");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
      dispatch(clearMessages());
    }

    if (message && !error) {
      toast.success(message);
      dispatch(clearMessages());
      setVisible(true);
    }
  }, [visible, dispatch, error, isAuth, navigate, message]);

  useMemo(() => {
    if (visible) {
      setHeading("Log in");
    } else {
      setHeading("Sign up");
    }

    if (isAuth) {
      navigate("/", {
        replace: true,
      });
    }
  }, [visible, isAuth, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={heading} />
          <Container fluid className="auth__parent">
            <Row className="auth__secondary">
              <Col md={true} className="auth__child">
                <div className="auth__content">
                  <h3>{heading}</h3>
                </div>

                {/* LOGIN - REGISTER */}
                {visible ? (
                  <Stack className="login__Stack">
                    <Form
                      className="login__form"
                      autoComplete="off"
                      onSubmit={loginSubmit}
                    >
                      <div className="input__box">
                        <FormControl isRequired>
                          <FormLabel>Email address</FormLabel>
                          <Input
                            type="email"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                          />
                          <FormHelperText>
                            We'll never share your email.
                          </FormHelperText>
                        </FormControl>
                      </div>

                      <div className="input__box">
                        <FormControl isRequired>
                          <FormLabel>Password</FormLabel>
                          <Input
                            type="password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                          />
                        </FormControl>
                      </div>

                      <div className="input__box button__box">
                        <Button type="submit" colorScheme="blue">
                          Log in
                        </Button>
                      </div>

                      <div className="link__box">
                        <Link to="/password/forgot">
                          <Button
                            variant={"ghost"}
                            color={"blue"}
                            type="button"
                          >
                            Forgot password?
                          </Button>
                        </Link>

                        <Button
                          variant={"ghost"}
                          color={"blue"}
                          type="button"
                          onClick={() => setVisible(false)}
                        >
                          Sign up
                        </Button>
                      </div>
                    </Form>
                  </Stack>
                ) : (
                  <Stack className="register__Stack">
                    <Form
                      className="register__form"
                      autoComplete="off"
                      onSubmit={registerSubmit}
                    >
                      <div className="register__input__box">
                        <FormControl isRequired>
                          <FormLabel>Name</FormLabel>
                          <Input
                            type="text"
                            value={registerName}
                            onChange={(e) => setRegisterName(e.target.value)}
                          />
                        </FormControl>
                      </div>

                      <div className="register__input__box">
                        <FormControl isRequired>
                          <FormLabel>Email address</FormLabel>
                          <Input
                            type="email"
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                          />
                          <FormHelperText>
                            We'll never share your email.
                          </FormHelperText>
                        </FormControl>
                      </div>

                      <div className="register__input__box">
                        <FormControl isRequired>
                          <FormLabel>Password</FormLabel>
                          <Input
                            type="password"
                            value={registerPassword}
                            onChange={(e) =>
                              setRegisterPassword(e.target.value)
                            }
                          />
                        </FormControl>
                      </div>

                      <div className="register__input__box register__button__box">
                        <Button type="submit" colorScheme="blue">
                          Sign up
                        </Button>
                      </div>

                      <div className="register__input__box register__button__box register__link__box">
                        <Button
                          variant={"link"}
                          color={"blue"}
                          type="button"
                          onClick={() => setVisible(true)}
                        >
                          Already have an account?
                        </Button>
                      </div>
                    </Form>
                  </Stack>
                )}
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Auth;
