import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello from React"
); //this create element return an react element which is inturn a js object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
