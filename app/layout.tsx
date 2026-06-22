import "./globals.scss";

export const metadata = {
  title: "Alias Game",
  description: "Alias game rewritten with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}