import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import PricePlan from "./pages/Priceplan";
import Contact from "./pages/Contact";
import MedicalBilling from "./pages/MedicalBilling";
import MedicalCoding from "./pages/MedicalCoding";
import MedicalCredentialing from "./pages/MedicalCredentialing";
import Specialties from "./pages/Specialties";
import ReferralProgram from "./pages/ReferralProgram";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/price-plan" element={<PricePlan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medical-billing" element={<MedicalBilling />} />
        <Route path="/medical-coding" element={<MedicalCoding />} />
        <Route
          path="/medical-credentialing"
          element={<MedicalCredentialing />}
        />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/referral-program" element={<ReferralProgram />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
