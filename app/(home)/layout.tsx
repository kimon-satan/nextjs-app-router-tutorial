import "../globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import { metadata } from "../metadata";
const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center gap-4 p-24">
          <header className="flex flex-col gap-4 items-center">
            <Image
              priority
              src="/images/katancubed.jpg"
              height={144}
              width={144}
              className="rounded-full"
              alt=""
            />
            <h1 className="text-3xl">{metadata.title}</h1>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
