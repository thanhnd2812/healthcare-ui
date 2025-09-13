import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function CategoryCard({ title, subtitle, className }: CategoryCardProps) {
  return (
    <div
      className={cn(
        "bg-gray-800 text-white flex flex-col items-center justify-center text-center min-h-[144px] relative overflow-hidden px-2",
        className
      )}
    >
      <h3 className="text-yellow-400 font-normal text-[22px] tracking-[0.11em] uppercase w-full px-2 mb-4">
        {title}
      </h3>
      <div className="w-12 h-px bg-white mb-3"></div>
      <p className="text-white text-lg font-light">
        {subtitle}
      </p>
    </div>
  );
}
