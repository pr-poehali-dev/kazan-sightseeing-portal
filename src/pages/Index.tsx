import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import { attractions } from "@/data/attractions";
import { architects } from "@/data/architects";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Book, MapPin, PenTool } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Categories */}
      <div className="py-12 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Исследуйте Казань</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-kazan-primary/10 flex items-center justify-center mb-4 group-hover:bg-kazan-primary/20 transition-colors">
                    <Book className="h-8 w-8 text-kazan-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Памятники архитектуры</h3>
                  <p className="text-muted-foreground mb-4">
                    Исторические здания и архитектурные шедевры
                  </p>
                  <Link to="/monuments" className="text-kazan-primary font-medium flex items-center hover:text-kazan-secondary transition-colors">
                    Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-kazan-primary/10 flex items-center justify-center mb-4 group-hover:bg-kazan-primary/20 transition-colors">
                    <MapPin className="h-8 w-8 text-kazan-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Знаковые места</h3>
                  <p className="text-muted-foreground mb-4">
                    Символические места и современные достопримечательности
                  </p>
                  <Link to="/landmarks" className="text-kazan-primary font-medium flex items-center hover:text-kazan-secondary transition-colors">
                    Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-kazan-primary/10 flex items-center justify-center mb-4 group-hover:bg-kazan-primary/20 transition-colors">
                    <PenTool className="h-8 w-8 text-kazan-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Арт-объекты</h3>
                  <p className="text-muted-foreground mb-4">
                    Современное искусство и скульптуры города
                  </p>
                  <Link to="/art-objects" className="text-kazan-primary font-medium flex items-center hover:text-kazan-secondary transition-colors">
                    Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Attractions Sections */}
      <CategorySection 
        title="Памятники архитектуры" 
        subtitle="Исторические здания и памятники, отражающие богатое культурное наследие Казани"
        categoryType="monument"
        attractions={attractions}
      />
      
      <CategorySection 
        title="Знаковые места" 
        subtitle="Уникальные места и объекты, ставшие символами современной Казани"
        categoryType="landmark"
        attractions={attractions}
      />
      
      <CategorySection 
        title="Арт-объекты" 
        subtitle="Современные арт-инсталляции и объекты искусства, украшающие городское пространство"
        categoryType="art-object"
        attractions={attractions}
      />

      {/* Architects Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Известные архитекторы</h2>
            <p className="text-muted-foreground max-w-2xl">
              Творцы, чьи работы определили облик Казани на протяжении веков
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architects.slice(0, 3).map((architect) => (
              <Card key={architect.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={architect.photo || "/placeholder.svg"} 
                    alt={architect.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{architect.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{architect.period}</p>
                  <p className="line-clamp-3 mb-4">{architect.bio}</p>
                  <Link 
                    to={`/architects/${architect.id}`} 
                    className="text-kazan-primary font-medium flex items-center hover:text-kazan-secondary transition-colors"
                  >
                    Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/architects" 
              className="inline-flex items-center text-kazan-primary hover:text-kazan-secondary transition-colors font-medium"
            >
              Все архитекторы <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
