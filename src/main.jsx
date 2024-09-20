import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAc9qzCfzKvRRNrp-W9E3LVw4SK-S3YpLc",
  authDomain: "proyectofinalditella.firebaseapp.com",
  projectId: "proyectofinalditella",
  storageBucket: "proyectofinalditella.appspot.com",
  messagingSenderId: "117104118406",
  appId: "1:117104118406:web:c2ceee200369365dcadf07",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
