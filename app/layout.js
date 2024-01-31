import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReduxProvider from "@/components/ReduxProvider";
import { ToastContainer } from "react-toastify";



config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sattiyas",
  description: "Shop here",
};

export default function RootLayout({ children }) {



  return (
    <>
      <html>
        <body className={inter.className}>
          <ReduxProvider>
          {children}
          <ToastContainer />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
