import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import WatchAds from "./pages/watchAds/WatchAds";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<WatchAds />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;