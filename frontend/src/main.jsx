import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Authprovider } from "./contex/Authprovider.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Authprovider>
      <App />
    </Authprovider>
  </BrowserRouter>
);
