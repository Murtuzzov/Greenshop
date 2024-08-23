import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./pages/HeroSection";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FilterSidebar />
    </>
  );
}

export default App;
