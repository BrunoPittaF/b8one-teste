import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Ofertas from "../Offers";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ofertas" element={<Ofertas />} />
    </Routes> 
  );
}