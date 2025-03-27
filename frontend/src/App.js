import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Metrics from "./pages/Metrics";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="p-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/metrics" element={<Metrics />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
