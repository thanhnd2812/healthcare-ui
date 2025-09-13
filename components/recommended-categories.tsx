import { CategoryCard } from "./category-card";

const categories = [
  {
    title: "RECOMMENDED COLUMN",
    subtitle: "オススメ",
  },
  {
    title: "RECOMMENDED DIET",
    subtitle: "ダイエット",
  },
  {
    title: "RECOMMENDED BEAUTY",
    subtitle: "美容",
  },
  {
    title: "RECOMMENDED HEALTH",
    subtitle: "健康",
  },
];

export function RecommendedCategories() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            subtitle={category.subtitle}
          />
        ))}
      </div>
    </section>
  );
}
