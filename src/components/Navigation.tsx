import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Achievements", path: "/achievements" },
    { name: "Events", path: "/events" },
    { name: "Join IEEE", path: "/join" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const controlImageBox = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        setIsAtTop(currentScrollY <= 10);
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlImageBox);
      return () => {
        window.removeEventListener("scroll", controlImageBox);
      };
    }
  }, [lastScrollY]);

  const logos = [
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751484845/IEEE_CAS_Logo_pktwle.png",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751484847/SPS_Logo_Color_RGB_TM_imjau6.png",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751484846/ieee-comsoc_lmlzia.png",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751484845/IEEE_CIS_logo_RGB_300ppi_j6ulqr.png",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751484846/IEEE_Nanotechnology_Council_Logo_p6xcxx.png",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1751484846/IEEE_Sensors_Council_Logo_jnavsy.png",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1757566956/pels-square_ctexx7.jpg",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1757566955/OIP_2_bl26us.webp",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1757566955/IEEE_CEDA_Logo-01_o8ry32.png",
    "https://res.cloudinary.com/dk34keh8x/image/upload/v1757566956/IEEE_CT_Soc_Logo_RGB_wscqph.png",
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dk34keh8x/image/upload/v1751693540/OIP-removebg-preview_tni3lv.png"
                alt="IEEE Presidency University Logo"
                className="h-10 sm:h-12 w-auto"
              />
              <div>
                <span className="text-xl font-bold text-ieee-blue">IEEE</span>
                <span className="text-sm text-gray-600 block leading-3">
                  Presidency University, Bengaluru
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-ieee-blue relative ${
                    isActive(item.path) ? "text-ieee-blue" : "text-gray-700"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ieee-orange rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-ieee-blue bg-ieee-light-blue/20"
                        : "text-gray-700 hover:text-ieee-blue hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Logos Section */}
      {isHomePage && (
        <div
          className={`fixed left-0 right-0 bg-gray-100 z-40 border-b border-gray-200 transition-all duration-300 ${
            isAtTop ? "top-16 opacity-100" : "top-16 h-0 opacity-0"
          }`}
        >
          <div className="px-2 sm:px-4 max-w-full">
            {/* Desktop/Laptop View */}
            <div className="hidden md:flex items-center justify-center gap-4 py-2">
              {logos.map((imageUrl, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md flex items-center justify-center p-1 w-12 h-12 lg:w-14 lg:h-14"
                >
                  <img
                    src={imageUrl}
                    alt={`IEEE Society Logo ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Mobile View */}
            <div className="flex flex-col items-center justify-center gap-2 md:hidden py-2">
              <div className="flex flex-wrap justify-center gap-2">
                {logos.slice(0, 6).map((imageUrl, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md flex items-center justify-center p-1 w-12 h-12"
                  >
                    <img
                      src={imageUrl}
                      alt={`IEEE Society Logo ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {logos.slice(6).map((imageUrl, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md flex items-center justify-center p-1 w-12 h-12"
                  >
                    <img
                      src={imageUrl}
                      alt={`IEEE Society Logo ${index + 7}`}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
