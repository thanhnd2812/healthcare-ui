import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Healthy"
        width={144}
        height={64}
      />
    </Link>
  );
}
