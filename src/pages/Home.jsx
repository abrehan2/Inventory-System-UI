// IMPORTS -
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MetaData from "../helpers/MetaData";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import * as AIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout as Logout } from "../redux/actions/userAction";
import Loader from "../components/Loader";
import "../styles/home.css";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const { user, loading } = useSelector((state) => state.USER);

  const history = useNavigate();
  const [heading, setHeading] = useState(user?.role);
  const dispatch = useDispatch();
  const actions =
    user?.role === "admin"
      ? [
          {
            icon: <FaIcons.FaSignOutAlt />,
            title: "Log out",
            func: logout,
          },
        ]
      : [
          {
            icon: <FaIcons.FaSignOutAlt />,
            title: "Log out",
            func: logout,
          },
          {
            icon: <AIcons.AiFillProfile />,
            title: "Profile",
            func: profile,
          },
        ];

  function logout() {
    dispatch(Logout());
  }

  function profile() {
    history("/profile");
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Home"} />
          <Container fluid className="home__parent">
            <Row className="home__secondary">
              <Col md={true} className="home__child">
                <div className="home__content">
                  <h3>Greetings, esteemed {heading}!</h3>
                </div>

                <div className="speed__dial">
                  <SpeedDial
                    ariaLabel="tooltip"
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    icon={<FaIcons.FaUser />}
                    direction="up"
                  >
                    {actions.map((item, key) => {
                      return (
                        <SpeedDialAction
                          icon={item.icon}
                          tooltipTitle={item.title}
                          key={key}
                          onClick={item.func}
                        />
                      );
                    })}
                  </SpeedDial>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
