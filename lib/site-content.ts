export const services = [
  "SMD монтаж",
  "Двосторонній монтаж",
  "Комбінований монтаж (SMD + THT)",
  "Відмивання плат",
  "Захисне покриття",
  "Монтаж у корпус",
  "Кабельно-джгутова продукція",
] as const;

export const qualityTiers = [
  {
    name: "Standard",
    description: "Оптимально для серійного виробництва з базовим контролем.",
    items: ["Монтаж SMD/THT", "Базовий контроль", "Відмивання плат"],
    highlight: false,
  },
  {
    name: "Pro",
    description: "Поглиблена перевірка та документування для вимогливих проєктів.",
    items: [
      "Монтаж",
      "Контроль під збільшенням",
      "Макро-фото",
      "Контроль за IPC",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    description: "Повний супровід якості та пріоритет у черзі виробництва.",
    items: [
      "Повний контроль якості",
      "Паспорт якості",
      "Макро-фото та відео",
      "Пріоритет",
    ],
    highlight: false,
  },
] as const;

export const extras = [
  {
    title: "Термінові замовлення",
    detail: "24–48 год",
  },
  {
    title: "Прототипи",
    detail: "від 1 плати",
  },
  {
    title: "Малі партії",
    detail: "гнучкі умови",
  },
  {
    title: "Під ключ",
    detail: "повний цикл",
  },
] as const;

export const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    alt: "Друкована плата та компоненти",
    caption: "Підготовка до монтажу",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    alt: "Монтаж електронних компонентів",
    caption: "Точність позиціонування",
  },
  {
    src: "https://images.unsplash.com/photo-1558346499-a692efe21ea4?w=800&q=80",
    alt: "Перевірка плати під мікроскопом",
    caption: "Контроль якості",
  },
  {
    src: "https://images.unsplash.com/photo-1591799264318-7e6bf8d7e87b?w=800&q=80",
    alt: "Електронне обладнання",
    caption: "Готові модулі",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    alt: "Пайка та збірка",
    caption: "Ручний монтаж",
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    alt: "Електричні кабелі та з'єднання",
    caption: "Кабельна продукція",
  },
] as const;
