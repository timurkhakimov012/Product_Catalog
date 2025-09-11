import Image from "next/image";
import styles from "./paje.module.css";
import Logo from "../components/logo/Logo";
import Card from "@/components/card/Card";

export default function Home() {
  return (
    <div className={`${styles["main-page"]} container`}>

      <header className={styles["header"]}>
        <div className={styles["header__logo"]}>
          <Logo />
        </div>

        <div className={styles["header__nav"]}>Nav</div>
        <div className={styles["header__search"]}>Search</div>
        <div className={styles["header__user-menu"]}>User Menu</div>
      </header>

      <main className={styles["main"]}>
        <div className={styles["main__sideBar"]}>sideBar</div>
        <div className={styles["main__content"]}>


          <div className={styles["main__products-grid"]}>
            <Card
              title="Classic Monochrome Tees"
              image="/products/01.png"
              price={35}
              status="in stock"
            />

            <Card
              title="Classic Monochrome Tees"
              image="/products/02.png"
              price={35}
              status="in stock"
            />

            <Card
              title="Classic Monochrome Tees"
              image="/products/03.png"
              price={35}
              status="in stock"
            />

            <Card
              title="Classic Monochrome Tees"
              image="/products/04.png"
              price={35}
              status="in stock"
            />
          </div>


        </div>
      </main>

      <footer className={styles["footer"]}>
        <h3 className={styles["footer__text"]}>footer</h3>
      </footer>
    </div>
  );
}
