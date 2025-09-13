import styles from "./sidebarCategories.module.css";
import { Dispatch, SetStateAction } from "react";

interface FilterState {
	category: string[];
	color: string[];
	size: string[];
	price: [number | null, number | null];
}

interface SidebarCategoriesProps {
	filter: FilterState;
	setFilter: Dispatch<SetStateAction<FilterState>>;
}

const sidebarCategories = ({ filter, setFilter }: SidebarCategoriesProps) => {

	const setFilterCategory = (checked: boolean, value: string) => {
		const newCategories = (checked: boolean, value: string) => {
			if (checked) {
				return [...filter.category, value];
			}
			return filter.category.filter((category) => category !== value);
		};

		setFilter({ ...filter, category: newCategories(checked, value) });
	};

	return (
		<div className={styles["sidebar-categories"]}>
			<h3 className={styles["sidebar-categories__title"]}>Categories</h3>
			<ul className={styles["sidebar-categories__list"]}>
				<li className={styles["sidebar-categories__item"]}>
					<label className={styles["sidebar-categories__label"]}>
						<input
							type="checkbox"
							className={styles["sidebar-categories__input"]}
							name="category"
							value="Футболки"
							onChange={(e) =>
								setFilterCategory(
									e.target.checked,
									e.target.value
								)
							}
						/>
						<span className={styles["sidebar-categories__span"]}>
							Футболки
						</span>
					</label>
				</li>
				<li className={styles["sidebar-categories__item"]}>
					<label className={styles["sidebar-categories__label"]}>
						<input
							type="checkbox"
							className={styles["sidebar-categories__input"]}
							name="category"
							value="Худи"
							onChange={(e) =>
								setFilterCategory(e.target.checked, e.target.value)
							}
						/>
						<span className={styles["sidebar-categories__span"]}>
							Худи
						</span>
					</label>
				</li>
				<li className={styles["sidebar-categories__item"]}>
					<label className={styles["sidebar-categories__label"]}>
						<input
							type="checkbox"
							className={styles["sidebar-categories__input"]}
							name="category"
							value="Кофты"
							onChange={(e) =>
								setFilterCategory(e.target.checked, e.target.value)
							}
						/>
						<span className={styles["sidebar-categories__span"]}>
							Кофты
						</span>
					</label>
				</li>
			</ul>
		</div>
	);
};

export default sidebarCategories;
