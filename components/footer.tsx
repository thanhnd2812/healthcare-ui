import Link from "next/link";

const footerLinks = [
  { href: "/membership", label: "会員登録" },
  { href: "/company", label: "運営会社" },
  { href: "/terms", label: "利用規約" },
  { href: "/privacy", label: "個人情報の取扱いについて" },
  { href: "/tokusho", label: "特定商取引法に基づく表記" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-orange-300 transition-colors text-sm font-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
