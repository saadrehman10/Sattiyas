import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
config.autoAddCss = false; 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sattiyas",
  description: "Shop here",
};

export default function RootLayout({ children }) {
  return (
    <>
       <body className={inter.className}>
        <Navbar></Navbar>
        <br></br>
           {children}
           <br></br>
        <Footer></Footer>
        <br></br>
        </body>
    </>
    
  );
}
