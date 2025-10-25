import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* Replaced 'IEEE' text box with the new image */}
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dk34keh8x/image/upload/v1751693540/OIP-removebg-preview_tni3lv.png"
                  alt="IEEE Logo"
                  className="w-full h-full object-contain rounded-lg" // Added rounded-lg for consistency
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">IEEE Presidency University</h3>
                <p className="text-gray-400 text-sm">Student Chapter</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Advancing technology for humanity through innovation, collaboration, and professional development.
              Join us in shaping the future of technology.
            </p>

            {/* Contact Us Section */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-ieee-orange" />
                  <a
                    href="https://maps.app.goo.gl/KjB18x6o5hkKjpVS9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm hover:text-ieee-orange transition-colors cursor-pointer"
                  >
                    Presidency University, Bengaluru
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-ieee-orange" />
                  {/* Mail address made accessible */}
                  <a href="mailto:ieeepresidencyuniversity@outlook.com" className="text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                    ieeepresidencyuniversity@outlook.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-ieee-orange" />
                  {/* Phone number made accessible */}
                  <a href="tel:+918682934017" className="text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                    +91 86829 34017
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ieee_presence_?igsh=MW90dGVnZ2U3Y3Bzbg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-ieee-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              {/* TODO: Add LinkedIn link when provided */}
              <a href="https://www.linkedin.com/in/ieee-presidency-university-384538387/" className="text-gray-400 hover:text-ieee-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links & IEEE Resources */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Quick Links Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 mb-6">
                <Link to="/newsletters" className="block text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                  Newsletters
                </Link>
                <Link to="/events-participated" className="block text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                  Events Conducted
                </Link>
                <Link to="/certificates" className="block text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                  Certificates
                </Link>
                <Link to="/active-ieee-members" className="block text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                  Active IEEE Members
                </Link>
                <Link to="/design" className="block text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                  Website Developers
                </Link>
                <Link to="/societies" className="block text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                  Office Bearers
                </Link>
              </div>
              {/* Removed image from here as it's moved to the rightmost column */}
            </div>

            {/* IEEE Resources Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">IEEE Resources</h4>
              <div className="space-y-2 mb-6">
                {/* Official website links and target="_blank" (as per previous request) */}
                <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                  IEEE Official
                </a>
                <a href="https://spectrum.ieee.org/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                  IEEE Spectrum
                </a>
                <a href="https://ieee-collabratec.ieee.org/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                  IEEE Collabratec
                </a>
                <a href="https://ieeebangalore.org/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                  IEEE Bengaluru
                </a>
                <a href="https://standards.ieee.org/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                  IEEE Standards
                </a>
                <a href="https://ieeexplore.ieee.org/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 text-sm hover:text-ieee-orange transition-colors">
                  IEEE Xplore
                </a>
              </div>
              {/* Removed image from here as it's moved to the rightmost column */}
            </div>
          </div>

          {/* Two Logos Stacked Vertically - Now in the rightmost column */}
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* IEEE Presence Logo */}
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-[160px] lg:max-w-[180px]">
              <img
                src="https://res.cloudinary.com/dk34keh8x/image/upload/v1752080621/Presence_lxnetf.jpg"
                alt="IEEE Presence Logo"
                className="w-full h-auto object-contain"
              />
            </div>
            {/* IEEE Bengaluru Section Logo - Increased size */}
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-[200px] lg:max-w-[220px]"> {/* Increased max-w */}
              <img
                src="https://res.cloudinary.com/dk34keh8x/image/upload/v1751516938/IEEE_BNG_oeayel.jpg"
                alt="IEEE Bengaluru Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 IEEE Presidency University Student Chapter.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
