import { Route, Routes } from "react-router-dom";
import "./App.css";

import Contacts from "./pages/Contacts";
import ChartsAndMaps from "./pages/ChartsAndMaps";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col bg-gray-100 h-[100vh] overflow-hidden">
      <Header />
      <div className="flex flex-col lg:flex-1 lg:flex-row overflow-hidden">
        <Navbar />
        <main className="flex-1 flex p-4 overflow-hidden">
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/charts-and-maps" element={<ChartsAndMaps />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
