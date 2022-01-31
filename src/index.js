import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

ReactDOM.render(<App />, document.getElementById("root"));
