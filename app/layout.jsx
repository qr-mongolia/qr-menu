// "use client";
import "./globals.css";
import { Inter } from "next/font/google";
// import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QR Generator",
  description: "QR Generation Tool",
};

export default function RootLayout({ children }) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // });

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/api/data");
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
