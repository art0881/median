import Image from "next/image";
import styles from "./page.module.css";
import Welcom from "./components/welcom/page";
import Header from "./components/Header/page"
import Popular from "./components/popular/page";
import Info from "./components/info/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <Header />
       <Welcom />
       <Popular />
       <Info />
      </div>
    </main>
  );
}
