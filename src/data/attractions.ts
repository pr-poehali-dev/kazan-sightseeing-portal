import { AttractionProps } from "@/components/AttractionsCard";

export const attractions: AttractionProps[] = [
  {
    id: "kazan-kremlin",
    name: "Казанский Кремль",
    type: "monument",
    description: "Казанский Кремль — древнейшая часть Казани, комплекс архитектурных, исторических и археологических памятников. Официальная резиденция Президента Республики Татарстан. Объект Всемирного наследия ЮНЕСКО.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584270692240-0411d322e4b0?q=80&w=1974&auto=format&fit=crop",
        alt: "Казанский Кремль"
      },
      {
        url: "https://images.unsplash.com/photo-1600422506223-41d568a6ce1b?q=80&w=2070&auto=format&fit=crop",
        alt: "Мечеть Кул-Шариф"
      }
    ],
    location: "Кремль, Казань",
    architectId: "ivan-postnik",
    architectName: "Постник Яковлев",
    year: "XVI век"
  },
  {
    id: "kul-sharif",
    name: "Мечеть Кул-Шариф",
    type: "monument",
    description: "Главная мечеть республики Татарстан и Казани. Расположена на территории Казанского кремля. Строительство было начато в 1996 году как воссоздание легендарной многоминаретной мечети столицы Казанского ханства, разрушенной в 1552 году.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1592438951629-a9f82a3c14c2?q=80&w=2070&auto=format&fit=crop",
        alt: "Мечеть Кул-Шариф"
      }
    ],
    location: "Казанский Кремль, Казань",
    architectId: "airat-khusnutdinov",
    architectName: "Айрат Хуснутдинов",
    year: "2005"
  },
  {
    id: "kazan-family-center",
    name: "Центр семьи «Казан»",
    type: "landmark",
    description: "Дворец бракосочетаний в Казани, открытый в 2013 году, имеет форму огромного казана. На высоте 32 метра расположена смотровая площадка, с которой открывается вид на Казанку, Кремль и центр города.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600421542626-4d1e2926ce77?q=80&w=1974&auto=format&fit=crop",
        alt: "Центр семьи «Казан»"
      }
    ],
    location: "ул. Сибгата Хакима, 4, Казань",
    architectId: "victor-tokarev",
    architectName: "Виктор Токарев",
    year: "2013"
  },
  {
    id: "kazan-millennium-bridge",
    name: "Мост Миллениум",
    type: "landmark",
    description: "Вантовый мост через реку Казанку, соединяющий Кировский и Ново-Савиновский районы Казани. Открыт 29 августа 2005 года, к празднованию тысячелетия города.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1593288942274-61d23a9a1c35?q=80&w=1972&auto=format&fit=crop",
        alt: "Мост Миллениум"
      }
    ],
    location: "Мост через реку Казанку, Казань",
    year: "2005"
  },
  {
    id: "temple-all-religions",
    name: "Храм всех религий",
    type: "art-object",
    description: "Архитектурное сооружение в посёлке Старое Аракчино в Казани, совмещающее элементы различных религий, культур и цивилизаций. Храм был задуман архитектором Ильдаром Хановым как культурный центр.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600354879649-1aae7e0f9a52?q=80&w=1975&auto=format&fit=crop",
        alt: "Храм всех религий"
      }
    ],
    location: "пос. Старое Аракчино, Казань",
    architectId: "ildar-khanov",
    architectName: "Ильдар Ханов",
    year: "1992"
  },
  {
    id: "cat-kazan",
    name: "Казанский кот",
    type: "art-object",
    description: "Скульптура казанского кота — один из популярных памятников Казани. Изображает упитанного кота, который, согласно историческим данным, был привезен в Санкт-Петербург по указу Елизаветы Петровны для борьбы с крысами.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600336247312-ba19bc8e60fe?q=80&w=1974&auto=format&fit=crop",
        alt: "Казанский кот"
      }
    ],
    location: "ул. Баумана, Казань",
    year: "2009"
  }
];

export const getAttractionsByType = (type: 'monument' | 'art-object' | 'landmark') => {
  return attractions.filter(attraction => attraction.type === type);
};

export const getAttractionById = (id: string) => {
  return attractions.find(attraction => attraction.id === id);
};
