"use client"
import Image from "next/image";
import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import React, { useState, useEffect } from "react";
import { ProductsList } from "./ProductsList";
import { ContactSection } from "./ContactSection";

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

export function HomePage() {
    const [isOpen, setIsOpen] = useState(false);
    const scrollYRef = React.useRef(0);

    const [products, setProducts] = useState<Product[]>([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const controllerRef = React.useRef<AbortController | null>(null);

    // Fetch products on mount with abort support and handle bfcache (pageshow)
    useEffect(() => {
        const fetchProducts = async () => {
            // abort previous if any
            if (controllerRef.current) {
                try {
                    controllerRef.current.abort();
                } catch (e) {}
            }

            const controller = new AbortController();
            controllerRef.current = controller;

            try {
                setProductsLoading(true);

                const response = await fetch("/api/products", { signal: controller.signal });

                if (!response.ok) {
                    console.error("Products fetch failed with status", response.status);
                    return;
                }

                const data = await response.json();

                if (data.success && Array.isArray(data.data)) {
                    setProducts(data.data);
                }
            } catch (error: any) {
                if (error.name === 'AbortError') {
                    // fetch was aborted - ignore
                } else {
                    console.error("Failed to fetch products:", error);
                }
            } finally {
                setProductsLoading(false);
            }
        };

        // initial fetch
        fetchProducts();

        // if page is restored from bfcache, re-fetch
        const onPageShow = (e: PageTransitionEvent) => {
            if ((e as any).persisted) {
                fetchProducts();
            }
        };

        window.addEventListener('pageshow', onPageShow as EventListener);

        return () => {
            window.removeEventListener('pageshow', onPageShow as EventListener);
            if (controllerRef.current) {
                try {
                    controllerRef.current.abort();
                } catch (e) {}
            }
        };
    }, []);

    useEffect(() => {
        const body = document.body;

        if (isOpen) {
            scrollYRef.current = window.scrollY;

            body.style.overflow = "hidden";
            body.style.touchAction = "none";
        } else {
            body.style.overflow = "";
            body.style.touchAction = "";
        }

        return () => {
            body.style.overflow = "";
            body.style.touchAction = "";
        };
    }, [isOpen]);

    const ScrollTo = (id: string) => {
        setIsOpen(false); // Закрываем мобильное меню

        // Ждем завершения анимации закрытия меню
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 0; // Высота заголовка в пикселях
                // Используем scrollIntoView для надежной прокрутки
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Дополнительно корректируем позицию, если есть смещение
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        }, 200); // Задержка в 400 мс соответствует времени анимации в CSS
    };

  return (
    <>
        <Header />

        <main>
            <section className={styles.hero_container}>
                <div className={styles.hero_block_sep_vert_left}>
                    <div className={styles.hero_img_1}>
                        <Image className={styles.img} src="/hero-1.webp" priority alt="Panamax Coffee" width={800} height={600} />
                    </div>

                    <div className={styles.hero_line}>
                        <div className={styles.marquee}>
                            <div className={styles.marquee_track}>
                                <p className={styles.hero_line_p}>panamax</p>
                                <Image src="/coffee.png" alt="Panamax Coffee logo" width={46} height={66} style={{ objectFit: "contain", marginRight: '10px', marginLeft: '10px', scale: '1.2' }} />

                                <p className={styles.hero_line_p}>panamax</p>
                                <Image src="/coffee.png" alt="Panamax Coffee logo" width={46} height={66} style={{ objectFit: "contain", marginRight: '10px', marginLeft: '10px', scale: '1.2' }} />

                                <p className={styles.hero_line_p}>panamax</p>
                                <Image src="/coffee.png" alt="Panamax Coffee logo" width={46} height={66} style={{ objectFit: "contain", marginRight: '10px', marginLeft: '10px', scale: '1.2' }} />

                                <p className={styles.hero_line_p}>panamax</p>
                                <Image src="/coffee.png" alt="Panamax Coffee logo" width={46} height={66} style={{ objectFit: "contain", marginRight: '10px', marginLeft: '10px', scale: '1.2' }} />

                                <p className={styles.hero_line_p}>panamax</p>
                                <Image src="/coffee.png" alt="Panamax Coffee logo" width={46} height={66} style={{ objectFit: "contain", marginRight: '10px', marginLeft: '10px', scale: '1.2' }} />

                                <p className={styles.hero_line_p}>panamax</p>
                                <Image src="/coffee.png" alt="Panamax Coffee logo" width={46} height={66} style={{ objectFit: "contain", marginRight: '10px', marginLeft: '10px', scale: '1.2' }} />

                                <p className={styles.hero_line_p}>panamax</p>
                                <Image src="/coffee.png" alt="Panamax Coffee logo" width={46} height={66} style={{ objectFit: "contain", marginRight: '10px', marginLeft: '10px', scale: '1.2' }} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.hero_img_2}>
                        <Image className={styles.img} src="/hero-2.webp" priority alt="HPanamax Coffee" width={800} height={600} />
                    </div>
                </div>

                <div className={styles.hero_block_sep_vert_right}>
                    <div className={styles.hero_title_flex}>
                        <div className={styles.hero_title}>
                            <h1 className={styles.h1}>Panamax</h1>
                            <h2 className={styles.h2}>coffee roasters</h2>

                            <div className={styles.divider} />

                            <p className={styles.p}>КОФЕЙНЯ • МАГАЗИН КОФЕ • ОБЖАРКА<br/>В ВОЛГОГРАДЕ</p>
                        </div>
                    </div>

                    <div className={styles.hero_img_right}>
                        <Image src="/hero-3.webp" className={styles.img} alt="Panamax Coffee" priority width={800} height={600} />
                    </div>
                </div>
            </section>

            <section className={styles.products_container} id="products">
                <div className={styles.main_padding}>
                    <h3 className={styles.h3}>АССОРТИМЕНТ</h3>

                    <ProductsList 
                        products={products} 
                        loading={productsLoading}
                        limit={2}
                        onOrderClick={() => ScrollTo("contact")}
                    />
                </div>
            </section>

            <div className={styles.block} id="about" />

            <section className={styles.about_container}>
                <div className={styles.main_padding}>
                    <div className={styles.about_flex}>
                        <div className={styles.about_left}>
                            <h3 className={styles.h3} style={{ margin: '0' }}>О НАС</h3>

                            <p className={styles.about_text}>Panamax Coffee — это не просто кофейня в Волгограде, а место, где кофе раскрывается во всей полноте вкуса. Мы сами обжариваем зёрна, поэтому в вашей чашке всегда свежий и ароматный напиток.</p>
                        
                            <p className={styles.about_text}>Наша команда — это эксперты, которые подберут для вас идеальный вариант: от классического эспрессо до фильтр-кофе или авторских рецептов. Мы радуем гостей не только кофе, но и уютной атмосферой, а также неизменно вежливым обслуживанием, за что нас ценят и выбирают снова и снова.</p>
                        
                            <button onClick={() => ScrollTo("contact")} className="header-button about-btn">
                                Заказать зерна
                            </button>
                        </div>

                        <div className={styles.about_right}>
                            <Image className={styles.img_about} src="/about.webp" alt="Panamax About" width={800} height={600} />
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.block} id="contact" />

            <ContactSection scrollToId="contact" />
        </main>

        <Footer />
    </>
  );
}