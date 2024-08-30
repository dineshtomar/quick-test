import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./pages/i18n";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}

serviceWorkerRegistration();
