import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Sharma Interiors | Top Interior Designers in Jaipur, India",
  description: "Transform your space with Sharma Interiors, Jaipur's premier interior design firm. Expert designers, luxury solutions, and personalized service for homes and businesses.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        {children}
      </body>
    </html>
  );
}
