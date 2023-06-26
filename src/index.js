// IMPORTS -
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Route from "./routes/Route";
import Store from "./redux/Store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Provider store={Store}>
      <RouterProvider router={Route} />
      <Toaster />
    </Provider>
  </ChakraProvider>
);
