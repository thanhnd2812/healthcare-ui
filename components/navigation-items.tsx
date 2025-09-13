import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export interface NavigationItem {
  href: string;
  label: string;
  icon?: string;
  badge?: number;
}

const navigationItems: NavigationItem[] = [
  {
    href: "/record",
    label: "自分の記録",
    icon: "/images/icon_memo.png",
  },
  {
    href: "/challenge",
    label: "チャレンジ",
    icon: "/images/icon_challenge.png",
  },
  {
    href: "/notifications",
    label: "お知らせ",
    icon: "/images/icon_info.png",
    badge: 1,
  },
];

interface NavigationItemsProps {
  className?: string;
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function NavigationItems({ className, isMobile = false, onItemClick }: NavigationItemsProps) {
  return (
    <nav className={cn("flex", isMobile ? "flex-col space-y-4" : "items-center space-x-8", className)}>
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-2 text-white hover:text-orange-300 transition-colors",
            isMobile ? "text-white py-4 border-b border-gray-600 last:border-b-0" : ""
          )}
          onClick={onItemClick}
        >
          {item.icon && (
            <div className="relative">
              <Image
                src={item.icon}
                alt=""
                width={32}
                height={32}
                className="w-8 h-8"
              />
              {item.badge && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
                  {item.badge}
                </span>
              )}
            </div>
          )}
          <span className={cn("font-light", isMobile ? "text-lg" : "text-base")}>
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}

export { navigationItems };
