import styles from './sidebarCategories.module.css';

const sidebarCategories = () => {
    return (
        <div className={styles["sidebar-categories"]}>
            <h3 className={styles["sidebar-categories__title"]}>Categories</h3>

            <ul className={styles["sidebar-categories__list"]}>
                <li className={styles["sidebar-categories__item"]}>
                    <label className={styles["sidebar-categories__label"]}>
                        <input type="checkbox" className={styles["sidebar-categories__input"]} />
                        <span className={styles["sidebar-categories__span"]}>Футболки</span>
                    </label>
                </li>
                <li className={styles["sidebar-categories__item"]}>
                    <label className={styles["sidebar-categories__label"]}>
                        <input type="checkbox" className={styles["sidebar-categories__input"]} />
                        <span className={styles["sidebar-categories__span"]}>Худи</span>
                    </label>
                </li>
                <li className={styles["sidebar-categories__item"]}>
                    <label className={styles["sidebar-categories__label"]}>
                        <input type="checkbox" className={styles["sidebar-categories__input"]} />
                        <span className={styles["sidebar-categories__span"]}>Кофты</span>
                    </label>
                </li>
            </ul>
        </div>
    );
}

export default sidebarCategories;