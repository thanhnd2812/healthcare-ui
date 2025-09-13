import { ArticleCard } from "./article-card";
import { Button } from "./ui/button";

// Mock data based on the image
const articles = [
  {
    id: "1",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-1.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "2",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-2.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "3",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-3.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "4",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-4.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "5",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-5.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "6",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-6.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "7",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-7.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    id: "8",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-8.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
  },
];

export function ColumnsGrid() {
  return (
    <section>
      {/* Articles Grid */}
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

      {/* Load More Button */}
      <div className="flex justify-center">
        <Button className="bg-gradient-to-t from-[#FFCC21] to-[#FF963C]  text-white px-16 py-3 rounded-md font-light text-base h-14">
          コラムをもっと見る
        </Button>
      </div>
    </section>
  );
}
