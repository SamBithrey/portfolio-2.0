import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Sam&apos;s Portfolio</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
