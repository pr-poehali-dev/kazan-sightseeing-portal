import { AttractionProps } from './AttractionsCard';
import AttractionsCard from './AttractionsCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  subtitle: string;
  categoryType: 'monument' | 'art-object' | 'landmark';
  attractions: AttractionProps[];
  limit?: number;
}

const CategorySection = ({ 
  title, 
  subtitle, 
  categoryType, 
  attractions, 
  limit = 3 
}: CategorySectionProps) => {
  // Filter attractions by category type and limit the number
  const filteredAttractions = attractions
    .filter(attraction => attraction.type === categoryType)
    .slice(0, limit);

  return (
    <section className="py-12">
      <div className="container">
        <div className="mb-8">
          <h2 className="section-title">{title}</h2>
          <p className="text-muted-foreground max-w-2xl">{subtitle}</p>
        </div>

        {filteredAttractions.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAttractions.map((attraction) => (
                <AttractionsCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                to={`/${categoryType}s`} 
                className="inline-flex items-center text-kazan-primary hover:text-kazan-secondary transition-colors font-medium"
              >
                Смотреть все <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <p>Пока нет доступных объектов в этой категории</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
