import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "@esri/calcite-components/dist/calcite/calcite.css";
import "./index.css";

import { defineCustomElements } from "@esri/calcite-components/dist/loader";

defineCustomElements(window, {
  resourcesUrl: "https://js.arcgis.com/calcite-components/2.6.0/assets",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
