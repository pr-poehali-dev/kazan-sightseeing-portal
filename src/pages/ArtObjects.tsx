import { useState } from 'react';
import { getAttractionsByType } from '@/data/attractions';
import AttractionsCard from '@/components/AttractionsCard';
import { Palette } from 'lucide-react';

const ArtObjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const artObjects = getAttractionsByType('art-object');
  
  const filteredArtObjects = artObjects.filter(obj => 
    obj.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    obj.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="flex items-center mb-4">
          <div className="bg-kazan-primary/10 p-3 rounded-full mr-4">
            <Palette className="h-6 w-6 text-kazan-primary" />
          </div>
          <h1 className="text-3xl font-bold">Арт-объекты Казани</h1>
        </div>
        
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Современные арт-инсталляции, скульптуры и объекты искусства, ставшие частью городского ландшафта и культурной идентичности Казани
        </p>
        
        <div className="mb-8">
          <input 
            type="text"
            placeholder="Поиск арт-объектов..."
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:ring-2 focus:ring-kazan-primary focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {filteredArtObjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtObjects.map((artObject) => (
              <AttractionsCard key={artObject.id} attraction={artObject} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Арт-объекты не найдены</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtObjects;
