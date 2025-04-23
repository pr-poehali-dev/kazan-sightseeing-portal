import { attractions } from "@/data/attractions";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarIcon, MapPin, Clock } from "lucide-react";

const Monuments = () => {
  // Фильтруем только памятники архитектуры
  const monuments = attractions.filter(attraction => attraction.type === "monument");

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-kazan-dark mb-4">Памятники архитектуры Казани</h1>
        <p className="text-lg text-kazan-dark/70 max-w-3xl mx-auto">
          Уникальные строения и архитектурные комплексы, представляющие историческую и культурную ценность города с тысячелетней историей
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {monuments.map((monument) => (
          <Card key={monument.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img 
                src={monument.images[0]} 
                alt={monument.name} 
                className="object-cover w-full h-64"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-kazan-dark">{monument.year}</span>
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="text-xl font-serif font-bold text-kazan-dark mb-2">{monument.name}</h3>
              
              <div className="flex items-center text-kazan-dark/70 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{monument.location}</span>
              </div>
              
              {monument.architect && (
                <div className="flex items-center text-kazan-dark/70 mb-2">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span className="text-sm">Архитектор: {monument.architect}</span>
                </div>
              )}
              
              <Separator className="my-3" />
              
              <p className="text-kazan-dark/80 mb-4 line-clamp-3">{monument.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-kazan-dark/70">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">Время работы: {monument.workingHours || "Круглосуточно"}</span>
                </div>
                
                <button className="text-kazan-primary hover:text-kazan-primary-dark transition-colors font-medium">
                  Подробнее
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Monuments;
