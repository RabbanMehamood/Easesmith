import Footer from "./components/Footer";
import Header from "./components/Header";
import PlantCarousel from "./components/PlantCarousel";
import ProductListSection from "./components/ProductFilterSection/ProductListSection";
import TopSection from "./components/TopSection";
import Home from "./pages/Home";


export default function App() {
  return (
    <>
      <Header />
      <TopSection/>
      <Home />
      <PlantCarousel/>
      <ProductListSection/>
      <Footer />
    </>
  );
}
