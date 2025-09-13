'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Logo from "../components/logo/Logo";
import Card from "@/components/card/Card";
import SidebarCategories from "@/components/sidebarCategories/SidebarCategories";

export default async function Home() {

  const [filter, setFilter] = useState({
    category: [],
    color: [],
    size: [],
    price: [null, null]
  });

  const products = await fetch('http://localhost:3050/products/')
    .then((res) => res.json());

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

        <div className={styles["main__sideBar"]}>
          <SidebarCategories filter={filter} setFilter={setFilter}/>
        </div>

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
