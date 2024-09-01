import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./pages/HeroSection";
import MainContent from "./pages/MainContent";
import ProductDetails from "./pages/ProductDetails";
import ShopRedirect from "./components/ShopRedirect/ShopRedirect";
import BlogPostDetail from "./components/BlogPostDetails/BlogPostDetails";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="max-w-screen-xl mx-auto px-4">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <MainContent />
                </>
              }
            />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/shop" element={<ShopRedirect />} />
            <Route path="/blogs" element={<BlogPostDetail />} />{" "}
          </Routes>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
