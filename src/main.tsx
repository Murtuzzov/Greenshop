import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "aos/dist/aos.css"; // Импорт стилей AOS

import AOS from "aos"; // Импорт AOS
import { Provider } from "react-redux";
import store from "./redux/store.ts";

// Инициализация AOS
AOS.init();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
