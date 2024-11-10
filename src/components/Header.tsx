import React, { useState } from 'react';
import { Radio, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (menuTimeout) {
      clearTimeout(menuTimeout);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 500);
    setMenuTimeout(timeout);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveMenu(null);
    if (menuTimeout) {
      clearTimeout(menuTimeout);
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 rounded-full bg-[#006AA] flex items-center justify-center">
              <a href="/">
                <img
                  src="https://i.ibb.co/kxnGC82/SAGE-BOOk-ARCS.png"
                  alt="SAGElogo-circle-cropped"
                  border="0"
                ></img>
              </a>
            </div>

            <a href="/">
              <img
                height="150px"
                width="150px"
                src="https://i.ibb.co/x7y9x8H/SAGE-text-blue.png"
                alt="SAGETEXT"
                border="0"
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className={`nav-link ${
                  activeMenu === 'about' ? 'text-[#006AAD]' : ''
                }`}
              >
                About Us
              </span>
              <div
                className={`submenu ${
                  activeMenu === 'about' ? 'visible opacity-100' : ''
                }`}
              >
                <Link to="/about/team" onClick={handleLinkClick}>
                  Team
                </Link>
                <Link to="/about/mission" onClick={handleLinkClick}>
                  Mission
                </Link>
                <Link to="/about/vision" onClick={handleLinkClick}>
                  Vision
                </Link>
                <Link to="/about/goals" onClick={handleLinkClick}>
                  Goals
                </Link>
              </div>
            </div>
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className={`nav-link ${
                  activeMenu === 'services' ? 'text-[#006AAD]' : ''
                }`}
              >
                Services
              </span>
              <div
                className={`submenu ${
                  activeMenu === 'services' ? 'visible opacity-100' : ''
                }`}
              >
                <Link to="/services/courses" onClick={handleLinkClick}>
                  Courses
                </Link>
                <Link to="/services/tutorials" onClick={handleLinkClick}>
                  Tutorials
                </Link>
                <Link to="/services/workshops" onClick={handleLinkClick}>
                  Workshops
                </Link>
                <Link to="/services/training" onClick={handleLinkClick}>
                  Training
                </Link>
                <Link to="/services/consulting" onClick={handleLinkClick}>
                  Consulting
                </Link>
              </div>
            </div>
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('news')}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className={`nav-link ${
                  activeMenu === 'news' ? 'text-[#006AAD]' : ''
                }`}
              >
                News
              </span>
              <div
                className={`submenu ${
                  activeMenu === 'news' ? 'visible opacity-100' : ''
                }`}
              >
                <Link to="/news/events" onClick={handleLinkClick}>
                  Upcoming Events
                </Link>
                <Link to="/news/newsletter" onClick={handleLinkClick}>
                  Newsletter
                </Link>
                <Link to="/news/gallery" onClick={handleLinkClick}>
                  Gallery
                </Link>
              </div>
            </div>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="mobile-nav-link"
              >
                Home
              </Link>
              <div className="space-y-2">
                <span className="font-bold text-[#006AAD]">About Us</span>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/about/team"
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    Team
                  </Link>
                  <Link
                    to="/about/mission"
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    Mission
                  </Link>
                  <Link
                    to="/about/vision"
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    Vision
                  </Link>
                  <Link
                    to="/about/goals"
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    Goals
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-[#006AAD]">Services</span>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/services/courses"
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    Courses
                  </Link>
                  <Link
                    to="/services/tutorials"
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    Tutorials
                  </Link>
                  <Link
                    to="/services/workshops"
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    Workshops
                  </Link>
                  <Link
                    to="/services/training"
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    Training
                  </Link>
                  <Link
                    to="/services/consulting"
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    Consulting
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-[#006AAD]">News</span>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/news/events"
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    Upcoming Events
                  </Link>
                  <Link
                    to="/news/newsletter"
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    Newsletter
                  </Link>
                  <Link
                    to="/news/gallery"
                    onClick={handleLinkClick}
                    className="mobile-nav-link"
                  >
                    Gallery
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="mobile-nav-link"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
