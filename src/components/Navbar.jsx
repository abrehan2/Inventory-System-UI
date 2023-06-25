// IMPORTS -
import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarData, { adminSidebarData } from "../helpers/NavData";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import "../styles/navbar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [values, setValues] = useState("");
  const { user } = useSelector((state) => state.USER);

  useMemo(() => {
    if (user?.role === "admin") {
      setValues(adminSidebarData);
    } else {
      setValues(SidebarData);
    }
  }, [user?.role]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={true}>
            <IconContext.Provider value={{ color: "#fff" }}>
              <div className="navbar">
                <FaIcons.FaBars onClick={showSidebar} className="menu-bars" />
              </div>
              <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle cross-bars">
                    <AiIcons.AiOutlineClose className="cross-bars" />
                  </li>
                  {values &&
                    values.map((item, index) => {
                      return (
                        <li key={index} className={item.cName}>
                          <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </nav>
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navbar;
