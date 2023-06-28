import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { metadata } from "../../metadata";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function Layout({ children }: { children: React.ReactNode }) {
  const name = "kimonsatan";
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center gap-2 p-12">
          <header className="flex flex-col gap-2 items-center">
            <Link href="/">
              <Image
                priority
                src="/images/katancubed.jpg"
                className="rounded-full"
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className="text-2xl">
              <Link href="/">{metadata.title}</Link>
            </h2>
          </header>

          {children}
        </main>
      </body>
    </html>
  );
}
