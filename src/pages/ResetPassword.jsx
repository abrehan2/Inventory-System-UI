import React, { useEffect, useState } from "react";
import { Container, Row, Col, Stack, Form } from "react-bootstrap";
import MetaData from "../helpers/MetaData";
import Loader from "../components/Loader";
import { FormControl, FormLabel, Button, Input } from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../redux/actions/userAction";
import toast from "react-hot-toast";
import "../styles/resetPass.css";

const Auth = () => {
  const dispatch = useDispatch();
  const { error, loading, success } = useSelector(
    (state) => state.FORGOT_PASSWORD
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const resetHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(params.token, myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Password updated successfully");
      navigate("/auth");
    }
  }, [dispatch, error, success, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Reset Password"} />
          <Container fluid className="auth__parent">
            <Row className="auth__secondary">
              <Col md={true} className="auth__child">
                <div className="auth__content">
                  <h3>Reset?</h3>
                </div>
                <Stack className="login__Stack">
                  <Form
                    className="login__form"
                    autoComplete="off"
                    onSubmit={resetHandler}
                  >
                    <div className="input__box">
                      <FormControl isRequired>
                        <FormLabel>New password</FormLabel>
                        <Input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </FormControl>
                    </div>

                    <div className="input__box">
                      <FormControl isRequired>
                        <FormLabel>Confirm password</FormLabel>
                        <Input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
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
