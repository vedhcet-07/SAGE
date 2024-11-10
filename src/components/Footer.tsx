import React from 'react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#006AAD] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About SAGE</h3>
            <p className="text-sm">
              Leading the way in RF and Wireless Technologies education and
              consulting, empowering professionals and organizations to excel in
              the digital age.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about/team"
                  className="hover:text-[#FB6B31] transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-[#FB6B31] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/news/events"
                  className="hover:text-[#FB6B31] transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#FB6B31] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@shastryassociates.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Sector 1, HSR Layout, Bangalore</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61561994620408"
                target="_blank"
                className="hover:text-[#FB6B31] transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#FB6B31] transition-colors">
                <Twitter size={24} />
              </a>
              <a
                target="_blank"
                href="http://www.linkedin.com/in/shastry-associates-global-enterprises-sage"
                className="hover:text-[#FB6B31] transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-[#FB6B31] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>
            {' '}
            &copy; {new Date().getFullYear()} SAGE Technologies. All rights
            reserved.
          </p>
          <br />
          <p>Developed by MSV</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
