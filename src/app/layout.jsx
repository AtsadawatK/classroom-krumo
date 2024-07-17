
"use client"
import "./globals.css";
import Navbar from "./Navbar";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-kanit " style={{}} >
        <Navbar /> <div className="">{children}</div>
       
        </body>
        
    </html>
  );
}
