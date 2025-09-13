import styles from "./logo.module.css";
import Image from "next/image";

const Logo = () => {
    return (
        <div className={styles["logo"]}>
            <div className={styles["logo__image"]}>
                <Image src ="/logo.svg" alt="logo" width={32} height={32}/>
            </div>
            <div className={styles["logo__text"]}>Ecommerce</div>
        </div>
    );
}

export default Logo;