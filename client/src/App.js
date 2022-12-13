import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </main>
  );
}
