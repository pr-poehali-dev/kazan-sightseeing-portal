import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Menu, Monument, Palette, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Главная" },
    { path: "/monuments", label: "Памятники архитектуры", icon: <Monument className="h-4 w-4 mr-1" /> },
    { path: "/landmarks", label: "Знаковые места", icon: <Building2 className="h-4 w-4 mr-1" /> },
    { path: "/art-objects", label: "Арт-объекты", icon: <Palette className="h-4 w-4 mr-1" /> },
    { path: "/architects", label: "Архитекторы" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img src="/logo-b.svg" alt="Казань" className="h-8 w-auto" />
            <span className="font-bold text-xl hidden sm:inline-block">Казань</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                  isLinkActive(link.path)
                    ? "bg-kazan-primary/10 text-kazan-primary"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.icon} {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    isLinkActive(link.path)
                      ? "bg-kazan-primary/10 text-kazan-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={closeMenu}
                >
                  {link.icon} {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
