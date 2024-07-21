import Image from "next/image";
import { Inter } from "next/font/google";
import FrontPage from "./component/FrontPage";


const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  
  
  return (
    <div>
      <FrontPage/>
    </div>
  );
}
