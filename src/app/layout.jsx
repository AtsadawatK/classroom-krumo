
import "./globals.css";
import Navbar from "./Navbar";


export const metadata = {
  title: "ห้องเรียน ครูโม",
  description: "สื่อการเรียนการสอนวิชาสังคมศึกษา",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-kanit">
        <Navbar /><div className="">{children}</div>
       
        </body>
        
    </html>
  );
}
