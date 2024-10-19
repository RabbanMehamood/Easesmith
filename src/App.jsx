import Footer from "./components/Footer";
import Header from "./components/Header";
import PlantCarousel from "./components/PlantCarousel";
import ProductFilterSection from "./components/ProductFilterSection/ProductFilterSection";
import ThankYouPage from "./components/ThankYou";
import TopSection from "./components/TopSection";
import Easesmith from "./Easesmith";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Easesmith />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
