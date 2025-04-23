import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface AttractionImage {
  url: string;
  alt: string;
}

export interface AttractionProps {
  id: string;
  name: string;
  type: 'monument' | 'art-object' | 'landmark';
  description: string;
  images: AttractionImage[];
  location: string;
  architectId?: string;
  architectName?: string;
  year?: string;
}

const AttractionsCard = ({ attraction }: { attraction: AttractionProps }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % attraction.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + attraction.images.length) % attraction.images.length);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        {attraction.images.length > 0 ? (
          <>
            <img 
              src={attraction.images[currentImageIndex].url} 
              alt={attraction.images[currentImageIndex].alt} 
              className="w-full h-full object-cover"
            />
            {attraction.images.length > 1 && (
              <div className="absolute bottom-4 right-4 flex space-x-1">
                {attraction.images.map((_, index) => (
                  <button 
                    key={index} 
                    className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <img src="/placeholder.svg" alt="Изображение отсутствует" className="w-full h-full object-cover" />
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-serif">{attraction.name}</CardTitle>
        {attraction.year && (
          <CardDescription className="text-sm">{attraction.year} г.</CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm line-clamp-3 mb-4">{attraction.description}</p>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{attraction.location}</span>
        </div>
        {attraction.architectName && (
          <div className="flex items-center text-sm text-muted-foreground">
            <User className="h-4 w-4 mr-1" />
            <span>Архитектор: {attraction.architectName}</span>
          </div>
        )}
      </CardContent>

      <CardFooter className="justify-end">
        <Link 
          to={`/${attraction.type}s/${attraction.id}`} 
          className="flex items-center text-kazan-primary hover:text-kazan-secondary transition-colors text-sm font-medium"
        >
          Подробнее <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AttractionsCard;
