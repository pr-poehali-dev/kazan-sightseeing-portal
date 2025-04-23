import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import { attractions } from "@/data/attractions";

const Index = () => {
  return (
    <main>
      <Hero />
      
      <CategorySection 
        title="Памятники архитектуры" 
        subtitle="Уникальные строения и архитектурные комплексы, представляющие историческую и культурную ценность"
        categoryType="monument"
        attractions={attractions}
      />
      
      <div className="bg-slate-50 py-4">
        <CategorySection 
          title="Арт объекты" 
          subtitle="Современные скульптуры, инсталляции и другие художественные объекты, украшающие городское пространство"
          categoryType="art-object"
          attractions={attractions}
        />
      </div>
      
      <CategorySection 
        title="Знаковые места" 
        subtitle="Знаменитые достопримечательности и символы города, которые определяют облик современной Казани"
        categoryType="landmark"
        attractions={attractions}
      />
      
      <section className="py-16 bg-kazan-dark text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-6">Откройте для себя тысячелетнюю историю Казани</h2>
            <p className="text-lg opacity-90 mb-8">
              Казань — город, где встречаются Восток и Запад, ислам и христианство, 
              древние традиции и современные технологии
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-serif text-kazan-primary mb-2">1005+</div>
                <p>лет истории</p>
              </div>
              <div>
                <div className="text-5xl font-serif text-kazan-primary mb-2">115+</div>
                <p>архитектурных памятников</p>
              </div>
              <div>
                <div className="text-5xl font-serif text-kazan-primary mb-2">3</div>
                <p>объекта ЮНЕСКО</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
