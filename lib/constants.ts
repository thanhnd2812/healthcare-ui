import type { Article, Category, FooterLink, MenuItem, NavigationItem } from './types';

// Navigation constants
export const NAVIGATION_ITEMS: NavigationItem[] = [
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
] as const;

// Category constants
export const RECOMMENDED_CATEGORIES: Category[] = [
  {
    id: "column",
    title: "RECOMMENDED COLUMN",
    subtitle: "オススメ",
    description: "おすすめのコラム記事",
  },
  {
    id: "diet",
    title: "RECOMMENDED DIET",
    subtitle: "ダイエット",
    description: "ダイエットに関する記事",
  },
  {
    id: "beauty",
    title: "RECOMMENDED BEAUTY",
    subtitle: "美容",
    description: "美容に関する記事",
  },
  {
    id: "health",
    title: "RECOMMENDED HEALTH",
    subtitle: "健康",
    description: "健康に関する記事",
  },
] as const;

// Article constants - Mock data
export const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-1.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
    category: "health",
  },
  {
    id: "2",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-2.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
    category: "diet",
  },
  {
    id: "3",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-3.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
    category: "beauty",
  },
  {
    id: "4",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-4.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
    category: "health",
  },
  {
    id: "5",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-5.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
    category: "diet",
  },
  {
    id: "6",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-6.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
    category: "beauty",
  },
  {
    id: "7",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-7.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
    category: "health",
  },
  {
    id: "8",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    image: "/images/column-8.jpg",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
    category: "general",
  },
] as const;

// Footer links constants
export const FOOTER_LINKS: FooterLink[] = [
  { href: "/membership", label: "会員登録" },
  { href: "/company", label: "運営会社" },
  { href: "/terms", label: "利用規約" },
  { href: "/privacy", label: "個人情報の取扱いについて" },
  { href: "/tokusho", label: "特定商取引法に基づく表記" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

// Mobile menu items constants
export const MOBILE_MENU_ITEMS: MenuItem[] = [
  { href: "/record", label: "自分の記録" },
  { href: "/weight-graph", label: "体重グラフ" },
  { href: "/goals", label: "目標" },
  { href: "/selected-course", label: "選択中のコース" },
  { href: "/columns", label: "コラム一覧" },
  { href: "/settings", label: "設定" },
] as const;

// Application constants
export const APP_CONFIG = {
  SCROLL_THRESHOLD: 50,
  ANIMATION_DURATION: 300,
  LOAD_MORE_BATCH_SIZE: 8,
  MAX_BADGE_COUNT: 99,
} as const;

// Contact information
export const CONTACT_INFO = {
  email: "thanhnd.it@icloud.com",
  phone: "+84916801271",
  developer: "NGUYEN DUC THANH",
  role: "FRONTEND REMOTE DEVELOPER",
} as const;

// Authentication constants
export const AUTH_CREDENTIALS = {
  username: "admin",
  password: "password123",
} as const;
