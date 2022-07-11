import React from "react";
import createRoot from "react-dom/client";
import Foods from "./Components/Food";
import "bootstrap/dist/css/bootstrap.css";

const root = createRoot.createRoot(document.getElementById("root"));
root.render(<Foods />);
