"use client";
import { useArticles } from "@/hooks";
import { ArticleCard } from "./article-card";
import { Button } from "./ui/button";

interface ArticlesGridProps {
  category?: string;
  search?: string;
}

export function ArticlesGrid({ category, search }: ArticlesGridProps = {}) {
  const { articles, loading, error, loadMore } = useArticles({
    category,
    search,
  });

  if (loading && articles.length === 0) {
    // Skeleton loading
    return (
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-gray-200 animate-pulse h-[200px] rounded"></div>
          ))}
        </div>
      </section>
    );
  }

  if (error && articles.length === 0) {
    // Error loading articles
    return (
      <section>
        <div className="text-center py-12">
          <div className="text-red-500 text-lg mb-4">Error loading articles</div>
          <p className="text-gray-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      {/* Articles Grid with articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
            date={article.date}
            time={article.time}
            tags={article.tags}
          />
        ))}
      </div>

      {/* Load More Button with hasMore flag in real-world */}

      {true && (
        <div className="flex justify-center">
          <Button 
            onClick={loadMore}
            disabled={loading}
            className="bg-gradient-to-t from-[#FFCC21] to-[#FF963C] text-white px-16 py-3 rounded-md font-light text-base h-14 hover:from-[#cfa313] hover:to-[#FF963C] disabled:opacity-50"
          >
            {loading ? "読み込み中..." : "コラムをもっと見る"}
          </Button>
        </div>
      )}

      {/* Articles count display */}
      {/* {totalCount > 0 && (
        <div className="text-center mt-6 text-gray-600 text-sm">
          {articles.length} / {totalCount} 記事を表示中
        </div>
      )} */}
    </section>
  );
}
