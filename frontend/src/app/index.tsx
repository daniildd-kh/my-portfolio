import localFont from "next/font/local";
const interFont = localFont({
  src: [
    {
      path: "../../public/fonts/Inter_18pt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={interFont.variable}>
      <body>{children}</body>
    </html>
  );
}
