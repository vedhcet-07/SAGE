import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/about/Team';
import Mission from './pages/about/Mission';
import Vision from './pages/about/Vision';
import Goals from './pages/about/Goals';
import Services from './pages/Services';
import Courses from './pages/services/Courses';
import Tutorials from './pages/services/Tutorials';
import Workshops from './pages/services/Workshops';
import Training from './pages/services/Training';
import Consulting from './pages/services/Consulting';
import News from './pages/News';
import Events from './pages/news/Events';
import Newsletter from './pages/news/Newsletter';
import Gallery from './pages/news/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/about/mission" element={<Mission />} />
            <Route path="/about/vision" element={<Vision />} />
            <Route path="/about/goals" element={<Goals />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/courses" element={<Courses />} />
            <Route path="/services/tutorials" element={<Tutorials />} />
            <Route path="/services/workshops" element={<Workshops />} />
            <Route path="/services/training" element={<Training />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/events" element={<Events />} />
            <Route path="/news/newsletter" element={<Newsletter />} />
            <Route path="/news/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
