import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Destination from "./pages/Destination";
import Contact from "./pages/Contact";
import AdventureHub from "./pages/AdventureHub";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import TravelHostCommunity from "./pages/TravelHostCommunity";
import PiggyBank from "./pages/PiggyBank";
import Homestay from "./pages/Homestay";

function App() {
  return (
    <Router>
      <Routes>
        {/* Root / Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Other Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adventurehub" element={<AdventureHub />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/travelhostcommunity" element={<TravelHostCommunity />} />
        <Route path="/piggybank" element={<PiggyBank />} />
        <Route path="/homestay" element={<Homestay />} />

        {/* Catch-all for invalid URLs (optional) */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
