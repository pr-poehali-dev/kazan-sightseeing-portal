import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-kazan-primary/10 to-kazan-secondary/10 py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Достопримечательности Казани
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Откройте для себя исторические памятники, современные арт-объекты 
              и знаковые места тысячелетней столицы Татарстана
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default" size="lg">
                <Link to="/monuments">
                  Памятники архитектуры <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/landmarks">
                  Знаковые места <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/art-objects">
                  Арт-объекты <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600422506223-41d568a6ce1b?q=80&w=2070&auto=format&fit=crop" 
                alt="Панорама Казани"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-lg overflow-hidden shadow-lg border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1592438951629-a9f82a3c14c2?q=80&w=2070&auto=format&fit=crop" 
                alt="Мечеть Кул-Шариф"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
