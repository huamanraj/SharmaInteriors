import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Sharma Interiors | Top Interior Designers in Jaipur, India | modular kitchen designs, customized bedroom interiors, and modern living room solutions",
  description: "Transform your home with expert modular kitchen designs, customized bedroom interiors, and modern living room solutions. Explore creative ideas for dining rooms, bathrooms, home offices, kids' rooms, and more. Tailored designs for every space, from walk-in closets to home theaters and balconies. | Discover expert interior designers in Jaipur, Kota, and Udaipur offering affordable, high-quality services. From residential to commercial spaces, find top-rated designers, compare prices, and explore creative ideas for homes, offices, and more. Learn about courses, salaries, and how to start a career in interior design. ",
  
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
