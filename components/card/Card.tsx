import styles from './card.module.css';
import Image from 'next/image';

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
                <Image src={image} alt={title} width={100} height={100} /> 
            </div>
        </div>
    );
}

export default Card;