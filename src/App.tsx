import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Almoulhaqia from "./pages/almoulhaqia";
import Activities from "./pages/Activities";
import Loading from "./components/Loading";
import OnlineServices from "./pages/OnlineServices/OnlineServices";
import AnnouncementsAndNotifications from "./pages/addsAndNotifications/Index";
import { FaArrowUp } from "react-icons/fa";
import Contact from "./components/Contact";
import SetDirection from "./components/SetDirection";
import NewsPage from "./pages/news/NewsPage";
import NewsDetails from "./pages/news/NewsDetails";
import LawsAndRegulations from "./pages/LawsAndRegulations/LawsAndRegulations";

import Speech from "./pages/almoulhaqia/Speach";
import Events from "./pages/events/index";
import CulturalMagazine from './pages/CulturalMagazine/CulturalMagazine'


import myAxios from "./api/myAxios";
import ActivityPage from "./pages/Activities/ActivitiesPage";


function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Simulate loading time (e.g., API calls, fetching resources, etc.)
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Show the scroll-to-top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Make a request to the backend to log the visit
  useEffect(() => {
    myAxios
      .get("/visitors/log")
      .then((response) => console.log("Visit logged", response.data))
      .catch((error) => console.error("Error logging visit", error));
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Router>
        <SetDirection />
        <Navbar />
        <Routes>
          {/* home */}
          <Route path="/" element={<Home />} />
          {/* almoulhaqia */}
          <Route path="/almoulhaqia" element={<Almoulhaqia />} />
          <Route path="/speech" element={<Speech />} />

          {/* services */}
          <Route path="/services" element={<OnlineServices />} />
          <Route path="/regulations" element={<LawsAndRegulations />} />

          <Route path="/activities" element={<Activities />} />
          <Route path="/activity/:id" element={<ActivityPage />} />

          <Route path="/cultural-events" element={<Events />} />
          <Route path="/magazine" element={<CulturalMagazine />} />

          {/* news */}
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetails />} />

          <Route path="/announcements" element={<AnnouncementsAndNotifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

      {/* Scroll-to-top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-700 focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );

}
export default App;
