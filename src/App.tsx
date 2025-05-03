import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import myAxios from "./api/myAxios";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import SetDirection from "./components/SetDirection";
import LanguageSelector from "./components/LanguageSelector";

// Pages
import Home from "./pages/home";
import Almoulhaqia from "./pages/almoulhaqia";
import Activities from "./pages/Activities";
import OnlineServices from "./pages/OnlineServices/OnlineServices";
import AnnouncementsAndNotifications from "./pages/addsAndNotifications/Index";
import Contact from "./components/Contact";
import NewsPage from "./pages/news/NewsPage";
import NewsDetails from "./pages/news/NewsDetails";
import LawsAndRegulations from "./pages/LawsAndRegulations/LawsAndRegulations";
import Speech from "./pages/almoulhaqia/Speach";
import Events from "./pages/events/index";
import CulturalMagazine from "./pages/CulturalMagazine/CulturalMagazine";
import StudyInRussiaPage from "./pages/studyInRussia/index";
import CategoryPage from "./components/NewsDetailsPage";
import AdDetails from "./pages/addsAndNotifications/AdDetails";
import ActivityDetails from "./pages/events/ActivityDetails";

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    myAxios
      .get("/visitors/log")
      .then((response) => console.log("Visit logged", response.data))
      .catch((error) => console.error("Error logging visit", error));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <SetDirection />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/almoulhaqia" element={<Almoulhaqia />} />
        <Route path="/speech" element={<Speech />} />
        <Route path="/services" element={<OnlineServices />} />
        <Route path="/regulations" element={<LawsAndRegulations />} />
        <Route path="/study-in-russia" element={<StudyInRussiaPage />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activity/:id" element={<CategoryPage />} />
        <Route path="/activities/:id" element={<ActivityDetails />} />
        <Route path="/cultural-events" element={<Events />} />
        <Route path="/magazine" element={<CulturalMagazine />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/announcements" element={<AnnouncementsAndNotifications />} />
        <Route path="/ads/:id" element={<AdDetails />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      {/* Floating Language Selector */}
      <LanguageSelector />

      {/* Scroll-to-top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-700 focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </Router>
  );
}

export default App;
