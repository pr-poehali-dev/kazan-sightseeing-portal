import { Link } from "react-router-dom";
import { architects } from "@/data/architects";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Architects = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-center mb-8 text-kazan-dark">
        Архитекторы Казани
      </h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-kazan-secondary">
        Познакомьтесь с выдающимися архитекторами, чьи работы сформировали 
        уникальный облик и историческое наследие Казани.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {architects.map((architect) => (
          <Card key={architect.id} className="hover:shadow-lg transition-shadow overflow-hidden">
            <CardHeader className="p-0">
              <AspectRatio ratio={4/3}>
                <img 
                  src={architect.photo} 
                  alt={architect.name}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-kazan-dark">
                {architect.name}
              </h3>
              <p className="text-sm text-kazan-secondary mb-2">
                {architect.period}
              </p>
              <p className="text-sm text-kazan-text line-clamp-3 mb-4">
                {architect.bio}
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-medium mb-1 text-kazan-dark">Известные работы:</h4>
                <ul className="text-sm text-kazan-secondary">
                  {architect.works.map((work, index) => (
                    <li key={index} className="line-clamp-1">{work}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Architects;
