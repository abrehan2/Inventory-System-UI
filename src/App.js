// IMPORTS -
import React, { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import webfont from "webfontloader";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/userAction.jsx";
import Loader from "./components/Loader.jsx";
import "./styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const { isAuth, loading } = useSelector((state) => state.USER);
  const navigate = useNavigate();

  useEffect(() => {
    // FONT LOADER -
    webfont.load({
      google: {
        families: ["Roboto"],
      },
    });

    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          {!isAuth ? (
            navigate("/auth", {
              replace: true,
            })
          ) : (
            <div className="App">
              <Navbar />
              <Outlet />
              <Footer />
            </div>
          )}
        </Suspense>
      )}
    </>
  );
};

export default App;
