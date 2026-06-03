import Image from "next/image";
import styles from "./ui.module.css";

interface Product {
    id: number;
    title: string;
    type: string | null;
    description: string | null;
    sizes: string[];
    prices: string[];
    image_url: string | null;
    created_at: string;
}

interface ProductCardProps {
    product: Product;
    onOrderClick: () => void;
}

export function ProductCard({ product, onOrderClick }: ProductCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.card_top}>
                <Image 
                    className={styles.card_img} 
                    src={product.image_url || "/product_1.png"} 
                    alt={product.title} 
                    width={1200} 
                    height={600} 
                    style={{ objectFit: 'contain' }} 
                />
            </div>
            <div className={styles.card_bottom}>
                <div>
                    <p className={styles.card_title}>{product.title}</p>
                
                    {product.type && <p className={styles.card_type}>{product.type}</p>}
                </div>

                <div className={styles.divider_bottom}>
                    {product.description && <p className={styles.card_desc}>{product.description}</p>}

                    <div className={styles.card_flex}>
                        <div className={styles.card_specifications}>
                            <div>
                                {product.sizes.map((size, idx) => (
                                    <p key={idx}>{size}</p>
                                ))}
                            </div>

                            <div>
                                {product.prices.map((price, idx) => (
                                    <p key={idx}>{price}</p>
                                ))}
                            </div>
                        </div>

                        <button onClick={onOrderClick} className={styles.card_button}>
                            <Image src="/Arrow/Arrow_Right_LG.svg" alt="Заказать" style={{ margin: 'auto' }} width={36} height={36} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
