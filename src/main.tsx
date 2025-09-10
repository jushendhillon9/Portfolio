import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

const el = document.getElementById("root");
if (!el) throw new Error("Root element #root not found");

createRoot(el).render(
  <StrictMode>
    <App />
  </StrictMode>
);
