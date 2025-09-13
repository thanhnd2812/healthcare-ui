import type { Article, BodyRecordData, Category, DiaryEntry, ExerciseRecord, FoodDiaryEntry, FooterLink, MealType, MenuItem, NavigationItem, RecordSectionButton } from './types';

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

// Record page constants
export const RECORD_SECTION_BUTTONS: RecordSectionButton[] = [
  {
    id: "body-record",
    title: "BODY RECORD",
    subtitle: "自分のカラダの記録",
    image: "/images/MyRecommend-1.jpg",
    targetSection: "graph",
  },
  {
    id: "my-exercise",
    title: "MY EXERCISE",
    subtitle: "自分の運動の記録",
    image: "/images/MyRecommend-2.jpg",
    targetSection: "exercise",
  },
  {
    id: "my-diary",
    title: "MY DIARY",
    subtitle: "自分の日記",
    image: "/images/MyRecommend-3.jpg",
    targetSection: "diary",
  },
] as const;

// Body record mock data for graph
export const BODY_RECORD_DATA: BodyRecordData[] = [
  { date: "6月", weight: 75, bodyFat: 22 },
  { date: "7月", weight: 73, bodyFat: 21 },
  { date: "8月", weight: 71, bodyFat: 20 },
  { date: "9月", weight: 72, bodyFat: 21 },
  { date: "10月", weight: 70, bodyFat: 19 },
  { date: "11月", weight: 68, bodyFat: 18 },
  { date: "12月", weight: 67, bodyFat: 17 },
  { date: "1月", weight: 66, bodyFat: 16 },
  { date: "2月", weight: 65, bodyFat: 15 },
  { date: "3月", weight: 64, bodyFat: 14 },
  { date: "4月", weight: 63, bodyFat: 13 },
  { date: "5月", weight: 62, bodyFat: 12 },
] as const;

// Exercise records mock data
export const EXERCISE_RECORDS: ExerciseRecord[] = [
  { id: "1", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "2", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "3", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "4", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "5", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "6", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "7", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "8", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "9", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "10", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "11", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "12", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "13", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "14", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "15", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
  { id: "16", name: "家事全般（立位・軽い）", calories: 26, duration: 10, type: "cardio" },
] as const;

// Diary entries mock data
export const DIARY_ENTRIES: DiaryEntry[] = [
  {
    id: "1",
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一日の要約として記録されます",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    id: "2",
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一日の要約として記録されます",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    id: "3",
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一日の要約として記録されます",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    id: "4",
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一日の要約として記録されます",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    id: "5",
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一日の要約として記録されます",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    id: "6",
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一日の要約として記録されます",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    id: "7",
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一日の要約として記録されます",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
  {
    id: "8",
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一日の要約として記録されます",
    content: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  },
] as const;

// Meal tracking constants
export const MEAL_TYPES: MealType[] = [
  {
    id: "morning",
    name: "Morning",
    icon: "icon_knife",
    completed: false,
  },
  {
    id: "lunch", 
    name: "Lunch",
    icon: "icon_knife",
    completed: false,
  },
  {
    id: "dinner",
    name: "Dinner", 
    icon: "icon_knife",
    completed: false,
  },
  {
    id: "snack",
    name: "Snack",
    icon: "icon_cup",
    completed: false,
  },
] as const;

// Food diary mock data
export const FOOD_DIARY_ENTRIES: FoodDiaryEntry[] = [
  {
    id: "1",
    date: "05.21",
    time: "Morning",
    mealType: "morning",
    image: "/images/m01.jpg",
    title: "サンドイッチとサラダ"
  },
  {
    id: "2", 
    date: "05.21",
    time: "Lunch",
    mealType: "lunch",
    image: "/images/l01.jpg",
    title: "お弁当"
  },
  {
    id: "3",
    date: "05.21",
    time: "Dinner", 
    mealType: "dinner",
    image: "/images/d01.jpg",
    title: "和食定食"
  },
  {
    id: "4",
    date: "05.21",
    time: "Snack",
    mealType: "snack", 
    image: "/images/s01.jpg",
    title: "ケーキ"
  },
  {
    id: "5",
    date: "05.20",
    time: "Morning",
    mealType: "morning",
    image: "/images/m02.jpg",
    title: "パンケーキ"
  },
  {
    id: "6",
    date: "05.20", 
    time: "Lunch",
    mealType: "lunch",
    image: "/images/l02.jpg",
    title: "パスタ"
  },
  {
    id: "7",
    date: "05.20",
    time: "Dinner",
    mealType: "dinner", 
    image: "/images/d02.jpg",
    title: "ステーキ"
  },
  {
    id: "8",
    date: "05.20",
    time: "Snack",
    mealType: "snack",
    image: "/images/m03.jpg", 
    title: "フルーツ"
  },
] as const;
