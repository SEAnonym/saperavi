import { Routes, Route } from "react-router-dom";
import { LandingPage, AllProduct, ActiveProduct, AboutUs } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<AllProduct />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="/products/:productId" element={<ActiveProduct />} />
    </Routes>
  );
}
