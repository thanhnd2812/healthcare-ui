
import { ArticlesGrid } from "@/components/articles-grid";
import { RecommendedCategories } from "@/components/recommended-categories";

const ColumnsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Recommended Categories */}
        <RecommendedCategories />
        
        {/* Columns Grid */}
        <ArticlesGrid />
      </div>
    </main>
  );
};

export default ColumnsPage;