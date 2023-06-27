import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  forgotPassword,
  clearErrors,
  clearMessages,
} from "../redux/actions/userAction";
import toast from "react-hot-toast";
import "../styles/forgotPass.css";

const Auth = () => {
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector(
    (state) => state.FORGOT_PASSWORD
  );
  const [email, setEmail] = useState("");

  const forgotHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("email", email);

    dispatch(forgotPassword(myForm));
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
  }, [dispatch, error, message]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Forgot Password"} />
          <Container fluid className="auth__parent">
            <Row className="auth__secondary">
              <Col md={true} className="auth__child">
                <div className="auth__content">
                  <h3>Forgot?</h3>
                </div>
                <Stack className="login__Stack">
                  <Form
                    className="login__form"
                    autoComplete="off"
                    onSubmit={forgotHandler}
                  >
                    <div className="input__box">
                      <FormControl isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormHelperText>
                          We'll never share your email.
                        </FormHelperText>
                      </FormControl>
                    </div>

                    <div className="link__box">
                      <Link to="/auth">
                        <Button type="button" variant={"ghost"} color={"blue"}>
                          Cancel
                        </Button>
                      </Link>

                      <Button colorScheme="blue" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </Stack>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Auth;
