import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { UserAuthContextProvider } from "./components/userAuthContext";

ReactDOM.render(
  <React.StrictMode>
    <UserAuthContextProvider>
    <Router>
      <App />
    </Router>
    </UserAuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);