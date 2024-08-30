import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import Contacts from "./pages/Contacts";
import ChartsAndMaps from "./pages/ChartsAndMaps";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="flex flex-col bg-gray-100 h-[100vh]">
          <Header />
          <div className="flex flex-col lg:flex-1 lg:flex-row">
            <Navbar />
            <main className="flex-1 p-4">
              <Routes>
                <Route path="/" element={<Contacts />} />
                <Route path="/charts-and-maps" element={<ChartsAndMaps />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
