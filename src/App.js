import "./sass/main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Candidate from "./pages/Candidate.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="candidate" element={<Candidate />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
