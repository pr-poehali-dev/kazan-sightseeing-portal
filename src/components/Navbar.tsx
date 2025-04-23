import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-kazan-primary" />
            <span className="text-xl font-serif font-bold text-kazan-dark">Казань</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/monuments" className="text-kazan-dark hover:text-kazan-primary transition-colors">
              Памятники архитектуры
            </Link>
            <Link to="/art-objects" className="text-kazan-dark hover:text-kazan-primary transition-colors">
              Арт объекты
            </Link>
            <Link to="/landmarks" className="text-kazan-dark hover:text-kazan-primary transition-colors">
              Знаковые места
            </Link>
            <Link to="/architects" className="text-kazan-dark hover:text-kazan-primary transition-colors">
              Архитекторы
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-kazan-dark" />
            ) : (
              <Menu className="h-6 w-6 text-kazan-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/monuments" 
                className="text-kazan-dark hover:text-kazan-primary transition-colors"
                onClick={toggleMenu}
              >
                Памятники архитектуры
              </Link>
              <Link 
                to="/art-objects" 
                className="text-kazan-dark hover:text-kazan-primary transition-colors"
                onClick={toggleMenu}
              >
                Арт объекты
              </Link>
              <Link 
                to="/landmarks" 
                className="text-kazan-dark hover:text-kazan-primary transition-colors"
                onClick={toggleMenu}
              >
                Знаковые места
              </Link>
              <Link 
                to="/architects" 
                className="text-kazan-dark hover:text-kazan-primary transition-colors"
                onClick={toggleMenu}
              >
                Архитекторы
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
