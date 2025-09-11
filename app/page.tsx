import Image from "next/image";
import styles from "./paje.module.css";
import Logo from "../components/logo/Logo";
import Card from "@/components/card/Card";
import products from "@/data/product";

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

            {products.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </div>


        </div>
      </main>

      <footer className={styles["footer"]}>
        <h3 className={styles["footer__text"]}>footer</h3>
      </footer>
    </div>
  );
}
