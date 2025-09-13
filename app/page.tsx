'use client'
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Logo from "../components/logo/Logo";
import Card from "@/components/card/Card";
import SidebarCategories from "@/components/sidebarCategories/SidebarCategories";

export default function Home() {

	const [filter, setFilter] = useState({
		category: [] as string[],
		color: [] as string[],
		size: [] as string[],
		price: [null, null] as [number | null, number | null],
	});

	const [products, setProducts] = useState([]);


	/* http://localhost:3050/products/?category=%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D0%BA%D0%B8 */

	useEffect(() => {
		console.log(filter);

		let url = "http://localhost:3050/products/";

		if (filter.category.length > 0) {
			url += `?category=${filter.category.join(",")}`;
		}

		const fetchProducts = async () => {
			const products = await fetch(url).then(
				(res) => res.json()
			);
			setProducts(products);
		}

		fetchProducts();


	}, [filter]);

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
					<SidebarCategories filter={filter} setFilter={setFilter} />
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
				<h3 className={styles["footer__text"]}>Footer</h3>
			</footer>
		</div>
	);
}
