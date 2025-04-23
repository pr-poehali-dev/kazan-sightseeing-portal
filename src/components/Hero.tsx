import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-kazan-dark text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600421539016-cc3f0866d2b0?q=80&w=2070&auto=format&fit=crop" 
          alt="Панорама Казани" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Откройте для себя <span className="text-kazan-primary">Казань</span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            Тысячелетняя история, уникальная архитектура и богатое культурное наследие
            в одном из красивейших городов России
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-kazan-primary hover:bg-kazan-secondary">
              <Link to="/monuments">
                <MapPin className="mr-2 h-5 w-5" />
                Исследовать достопримечательности
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/architects">
                Узнать об архитекторах
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
