"use client";
import { useCategories } from "@/hooks";
import { CategoryCard } from "./category-card";

export function RecommendedCategories() {
  const { categories, loading, error } = useCategories();

  if (loading) {
    return (
      <section className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-200 animate-pulse h-[144px] rounded"></div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mb-16">
        <div className="text-center py-8">
          <div className="text-red-500">Error loading categories</div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            subtitle={category.subtitle}
          />
        ))}
      </div>
    </section>
  );
}
