import { useState, useEffect } from "react";
import { getAttractionsByType } from "@/data/attractions";
import AttractionsCard, { AttractionProps } from "@/components/AttractionsCard";
import { Landmark } from "lucide-react";

const Landmarks = () => {
  const [landmarks, setLandmarks] = useState<AttractionProps[]>([]);

  useEffect(() => {
    // Получаем только знаковые места
    const landmarksList = getAttractionsByType("landmark");
    setLandmarks(landmarksList);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8 space-x-3">
        <Landmark className="h-8 w-8 text-kazan-primary" />
        <h1 className="text-3xl font-bold text-kazan-dark">Знаковые места Казани</h1>
      </div>
      
      <p className="text-lg text-kazan-dark/80 mb-8">
        Современные достопримечательности и уникальные места, которые стали символами Казани и привлекают туристов со всего мира.
      </p>

      {landmarks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-xl text-kazan-dark/60">Загрузка знаковых мест...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landmarks.map((landmark) => (
            <AttractionsCard key={landmark.id} {...landmark} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Landmarks;
