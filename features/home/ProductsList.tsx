"use client";
import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "./ProductCard";
import RandomConsoleText from "./RandomConsoleText";
import GlitchImage from "./GlitchImage";
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

interface ProductsListProps {
    products: Product[];
    loading: boolean;
    limit?: number;
    onOrderClick: () => void;
}

export function ProductsList({ products, loading, limit, onOrderClick }: ProductsListProps) {
    const displayedProducts = limit ? products.slice(0, limit) : products;

    return (
        <div className={styles.products_list}>
            {loading ? (
                // skeleton loading: 3 placeholder cards
                [0, 1, 2].map((i) => (
                    <div key={i} className={styles.skeleton_card}>
                        <div className={styles.skeleton_top} />
                        <div className={styles.card_bottom}>
                            <div className={styles.skeleton_lines}>
                                <div className={styles.skeleton_line} />
                                <div className={styles.skeleton_line} style={{ width: '60%' }} />
                            </div>
                            <div style={{ height: 20 }} />
                        </div>
                    </div>
                ))
            ) : displayedProducts.length === 0 ? (
                <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>Товары не найдены</p>
            ) : (
                displayedProducts.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onOrderClick={onOrderClick}
                    />
                ))
            )}
            {/* Если задан лимит и есть больше товаров, добавляем карточку "Весь ассортимент" */}
            {limit && products.length > limit && (
                <Link href="/catalog" className={styles.card_2}>
                    <div className={styles.card_top}>
                        <GlitchImage
                            src="/product_1.png"
                            intensity={0.04}
                            maxOffset={12}
                            speed={100}
                        />
                    </div>
                    <div className={styles.card_bottom_overlay}>
                        <div>
                            <p className={styles.card_title}><RandomConsoleText length={20} interval={100} /></p>

                            <p className={styles.card_type}><RandomConsoleText length={10} interval={100} /></p>
                        </div>

                        <div className={styles.divider_bottom}>
                            <p className={styles.card_desc}><RandomConsoleText length={25} interval={100} /></p>
                        </div>
                    </div>

                    <div className={styles.card_overlay}>
                        <div className={styles.card_bottom_overlay_2}>
                            <p className={styles.card_overlay_p}>Весь ассортимент</p>
                            <div>
                                <Image src="/Arrow/Arrow_Right_LG.svg" alt="Перейти" width={36} height={36} />
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    );
}
