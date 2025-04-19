import Header from "@/components/Header";
import "./globals.css"
import styles from "../styles/Home.module.css"
import Home from "@/components/Home";
import SobreMim from "@/components/SobreMim";


export default function HomePage() {
  return (
    <>
      <Header/>
      <Home/>
      <SobreMim/>
    </>
  )
}
