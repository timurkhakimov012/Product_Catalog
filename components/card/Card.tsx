import styles from './card.module.css';
import Image from 'next/image';

const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
};


interface CardProps {
    title: string;
    image: string;
    price: number;
    status: "in stock" | "out of stock";
}

const Card: React.FC<CardProps> = ({ title, image, price, status }) => {
    return (
        <div className={styles["card"]}>
            <div className={styles["card__image"]}>
                <Image src={image} alt={title} width={237} height={0} />
            </div>

            <div className={styles["card__details"]}>
                <h4 className={styles["card__title"]}>{title}</h4>
                <div className={styles["card__footer"]}>
                    <p className={styles["card__status"]}>{status}</p>
                    <p className={styles["card__price"]}>
                        {formatPrice(price)}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;