export interface ArchitectProps {
  id: string;
  name: string;
  photo: string;
  bio: string;
  period: string;
  works: string[];
}

export const architects: ArchitectProps[] = [
  {
    id: "ivan-postnik",
    name: "Постник Яковлев",
    photo: "/placeholder.svg",
    bio: "Русский архитектор XVI века, также известный как Постник Барма. Один из возможных строителей Казанского Кремля после взятия Казани Иваном Грозным. Наиболее известен как создатель собора Василия Блаженного в Москве.",
    period: "XVI век",
    works: ["Казанский Кремль", "Собор Василия Блаженного (Москва)"]
  },
  {
    id: "airat-khusnutdinov",
    name: "Айрат Хуснутдинов",
    photo: "/placeholder.svg",
    bio: "Современный татарский архитектор, один из авторов проекта воссоздания мечети Кул-Шариф в Казанском Кремле. Заслуженный архитектор Республики Татарстан.",
    period: "XX-XXI век",
    works: ["Мечеть Кул-Шариф"]
  },
  {
    id: "victor-tokarev",
    name: "Виктор Токарев",
    photo: "/placeholder.svg",
    bio: "Современный российский архитектор, автор проекта Центра семьи «Казан» (Чаша) — одного из символов современной Казани.",
    period: "XXI век",
    works: ["Центр семьи «Казан»"]
  },
  {
    id: "ildar-khanov",
    name: "Ильдар Ханов",
    photo: "/placeholder.svg",
    bio: "Российский и татарский художник, скульптор, архитектор, целитель. Создатель уникального архитектурного сооружения — Храма всех религий в поселке Старое Аракчино в Казани.",
    period: "XX-XXI век",
    works: ["Храм всех религий"]
  }
];

export const getArchitectById = (id: string) => {
  return architects.find(architect => architect.id === id);
};
