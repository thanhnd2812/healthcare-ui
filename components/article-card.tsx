import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  tags: string[];
  className?: string;
}

export function ArticleCard({
  id,
  title,
  // description,
  image,
  date,
  time,
  tags,
  className,
}: ArticleCardProps) {
  return (
    <Link href={`/columns/${id}`} className={cn("block group", className)}>
      <article className="bg-white overflow-hidden transition-transform group-hover:scale-[1.02]">
        {/* Image with date overlay */}
        <div className="relative h-[144px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          {/* Date overlay */}
          <div className="absolute bottom-0 left-0 bg-yellow-400 text-white px-3 py-1 text-sm font-medium">
            {date} {time}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="text-gray-800 font-light text-[15px] leading-relaxed mb-3 line-clamp-2 tracking-[0.08em]">
            {title}
          </h3>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-orange-500 text-xs font-light tracking-[0.06em]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
