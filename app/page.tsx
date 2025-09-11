import Image from "next/image";
import styles from "./paje.module.css";
import Logo from "../components/logo/Logo";

export default function Home() {
  return (
    <div className="container">

      <header className={styles["header"]}>
        <div className={styles["header__logo"]}>
          <Logo/>
        </div>

        <div className={styles["header__nav"]}>Nav</div>
        <div className={styles["header__search"]}>Search</div>
        <div className={styles["header__user-menu"]}>User Menu</div>
      </header>

      <main className={styles["main"]}>
         <div className={styles["main__sideBar"]}>sideBar</div>
         <div className={styles["main__content"]}>Content</div>
      </main>

      <footer>
        <h3>footer</h3>
      </footer>

    </div>
  );
}
