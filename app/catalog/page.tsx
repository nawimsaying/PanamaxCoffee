"use client"
import { useState, useEffect } from "react";
import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import { ProductsList } from "@/features/home/ProductsList";
import { ContactSection } from "@/features/home/ContactSection";
import styles from "@/features/home/ui.module.css";

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

export default function CatalogPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsLoading, setProductsLoading] = useState(true);

    // Fetch products on mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setProductsLoading(true);
                const response = await fetch("/api/products");
                const data = await response.json();
                
                if (data.success && Array.isArray(data.data)) {
                    setProducts(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setProductsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const ScrollTo = (id: string) => {
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 0;
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });

                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        }, 200);
    };

    return (
        <>
            <Header />
            <main>
                <div className={styles.hero_container_2}>
                    <section className={styles.products_container}>
                        <div className={styles.main_padding}>
                            <h1 className={styles.h3}>АССОРТИМЕНТ</h1>

                            <ProductsList 
                                products={products} 
                                loading={productsLoading}
                                onOrderClick={() => ScrollTo("contact")}
                            />
                        </div>
                    </section>
                </div>

                <div className={styles.block} id="contact" />

                <ContactSection scrollToId="contact" />
            </main>
            <Footer />
        </>
    );
}
