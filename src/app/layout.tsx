import "./globals.css";
import Providers from "@/app/providers";
import Header from "@/app/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
