import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "aos/dist/aos.css"; // Импорт стилей AOS
import AOS from "aos"; // Импорт AOS
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.ts"; // Импорт store и persistor
import { PersistGate } from "redux-persist/integration/react"; // Импорт PersistGate

// Инициализация AOS
AOS.init();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          {/* Оборачиваем приложение в PersistGate */}
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
