import Footer from "./components/Footer";
import Header from "./components/Header";
import PlantCarousel from "./components/PlantCarousel";
import ProductFilterSection from "./components/ProductFilterSection/ProductFilterSection";
import TopSection from "./components/TopSection";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Easesmith() {
  return (
    <>
      <Header />
      <TopSection />
      <Home />
      <PlantCarousel />
      <ProductFilterSection />
      <Footer />
    </>
  );
}
