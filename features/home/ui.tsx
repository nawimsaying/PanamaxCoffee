"use client"
import { Header } from "@/widgets/header/header";
import { Footer } from "@/widgets/footer/footer";
import React, { useState, useEffect } from "react";

import styles from "./ui.module.css";

export function HomePage() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);

    const [website, setWebsite] = useState("");

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async () => {
        const newErrors = {
            name: "",
            email: "",
            message: "",
        };

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedMessage = message.trim();

        // name validation
        if (!trimmedName) {
            newErrors.name = "Введите имя";
        } else if (trimmedName.length < 2) {
            newErrors.name = "Имя слишком короткое";
        }

        // email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!trimmedEmail) {
            newErrors.email = "Введите email";
        } else if (!emailRegex.test(trimmedEmail)) {
            newErrors.email = "Некорректный email";
        }

        setErrors(newErrors);

        if (
            newErrors.name ||
            newErrors.email
        ) {
            return;
        }

        try {
            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    website,
                }),
            });

            const data = await response.json();

            if (data.success) {
                alert("Сообщение отправлено!");

                setName("");
                setEmail("");
                setMessage("");

                setErrors({
                    name: "",
                    email: "",
                    message: "",
                });
            }
        } catch (error) {
            console.error(error);

            alert("Ошибка отправки");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const body = document.body;
        const html = document.documentElement;

        if (isOpen) {
            // Сохраняем текущий скролл
            const y = window.scrollY;
            setScrollY(y);

            // Фиксируем страницу
            body.style.overflow = "hidden";
body.style.touchAction = "none";
        } else {
            // Разблокируем страницу
            body.style.overflow = "";
            body.style.touchAction = "";

            // Возвращаем страницу в сохраненную позицию
            window.scrollTo({ top: scrollY, behavior: 'auto' });
        }

        return () => {
            // Очистка стилей при размонтировании компонента
            body.style.position = '';
            body.style.top = '';
            body.style.left = '';
            body.style.right = '';
            body.style.overflow = '';
            html.style.overflow = '';
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
                        <img className={styles.img} src="./hero-1.png" alt="Hero 1" />
                    </div>

                    <div className={styles.hero_line}>
                        <p className={styles.hero_line_p}>panamax</p>
                        <img src="./coffee.png" alt="Coffee logo" />
                    </div>

                    <div className={styles.hero_img_2}>
                        <img className={styles.img} src="./hero-2.png" alt="Hero 2" />
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
                        <img src="./hero-3.png" className={styles.img} alt="Hero 3" />
                    </div>
                </div>
            </section>

            <section className={styles.products_container} id="products">
                <div className={styles.main_padding}>
                    <h3 className={styles.h3}>АССОРТИМЕНТ</h3>

                    <div className={styles.products_list}>
                        <div className={styles.card}>
                            <div className={styles.card_top}>
                                <img className={styles.card_img} src="./product_1.png" alt="Фильтр-пакеты Гондурас Ксинакла натуральная" />
                            </div>
                            <div className={styles.card_bottom}>
                                <p className={styles.card_title}>Фильтр-пакеты Гондурас Ксинакла натуральная</p>
                            
                                <p className={styles.card_type}>натуральный</p>

                                <p className={styles.card_desc}>Сладкий кофе со вкусом цитрусов и яблочного пирога</p>

                                <div className={styles.card_flex}>
                                    <div className={styles.card_specifications}>
                                        <div>
                                            <p>250 гр</p>
                                            <p>1000 гр</p>
                                        </div>

                                        <div>
                                            <p>1259 руб</p>
                                            <p>3778 руб</p>
                                        </div>
                                    </div>

                                    <button onClick={() => ScrollTo("contact")} className={styles.card_button}>
                                        <img src="./Arrow/Arrow_Right_LG.svg" alt="Заказать" style={{ margin: 'auto' }} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.card_top}>
                                <img className={styles.card_img} src="./product_1.png" alt="Фильтр-пакеты Гондурас Ксинакла натуральная" />
                            </div>
                            <div className={styles.card_bottom}>
                                <p className={styles.card_title}>Фильтр-пакеты Гондурас Ксинакла натуральная</p>
                            
                                <p className={styles.card_type}>натуральный</p>

                                <p className={styles.card_desc}>Сладкий кофе со вкусом цитрусов и яблочного пирога</p>

                                <div className={styles.card_flex}>
                                    <div className={styles.card_specifications}>
                                        <div>
                                            <p>250 гр</p>
                                            <p>1000 гр</p>
                                        </div>

                                        <div>
                                            <p>1259 руб</p>
                                            <p>3778 руб</p>
                                        </div>
                                    </div>

                                    <button onClick={() => ScrollTo("contact")} className={styles.card_button}>
                                        <img src="./Arrow/Arrow_Right_LG.svg" alt="Заказать" style={{ margin: 'auto' }} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.card_top}>
                                <img className={styles.card_img} src="./product_1.png" alt="Фильтр-пакеты Гондурас Ксинакла натуральная" />
                            </div>
                            <div className={styles.card_bottom}>
                                <p className={styles.card_title}>Фильтр-пакеты Гондурас Ксинакла натуральная</p>
                            
                                <p className={styles.card_type}>натуральный</p>

                                <p className={styles.card_desc}>Сладкий кофе со вкусом цитрусов и яблочного пирога</p>

                                <div className={styles.card_flex}>
                                    <div className={styles.card_specifications}>
                                        <div>
                                            <p>250 гр</p>
                                            <p>1000 гр</p>
                                        </div>

                                        <div>
                                            <p>1259 руб</p>
                                            <p>3778 руб</p>
                                        </div>
                                    </div>

                                    <button className={styles.card_button} onClick={() => ScrollTo("contact")}>
                                        <img src="./Arrow/Arrow_Right_LG.svg" alt="Заказать" style={{ margin: 'auto' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <img className={styles.img_about} src="./about.png" />
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.block} id="contact" />

            <section className={styles.contact_container}>
                <div className={styles.main_padding}>
                    <h3 className={styles.h3}>ОСТАВЬТЕ <span className={styles.span}>ЗАЯВКУ</span><br/>И МЫ С ВАМИ СВЯЖЕМСЯ</h3>

                    <p className={styles.contact_desc}>(ИЛИ НАПИШИТЕ НАМ В СОЦ. СЕТЯХ)</p>

                    <div className={styles.socials}>
                        <img className={styles.social} src="./wapp.svg" />
                        <img className={styles.social} src="./tg.svg" />
                        <img className={styles.social} src="./vk.svg" />
                    </div>

                    <div className={styles.contact_flex}>
                        <div className={styles.contact_flex_top}>
                            <div className={styles.input_div}>
                                <input
                                    className="contact-input"
                                    placeholder="ВАШЕ ИМЯ"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);

                                        if (errors.name) {
                                            setErrors((prev) => ({
                                                ...prev,
                                                name: "",
                                            }));
                                        }
                                    }}
                                />

                                {errors.name && (
                                    <p className={styles.error_text}>
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className={styles.input_div}>
                                <input
                                    className="contact-input"
                                    placeholder="ВАШ EMAIL"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);

                                        if (errors.email) {
                                            setErrors((prev) => ({
                                                ...prev,
                                                email: "",
                                            }));
                                        }
                                    }}
                                />

                                {errors.email && (
                                    <p className={styles.error_text}>
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <input
                                type="text"
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                autoComplete="new-password"
                                tabIndex={-1}
                                style={{
                                    position: "absolute",
                                    left: "-9999px",
                                    opacity: 0,
                                    pointerEvents: "none",
                                }}
                            />
                        </div>

                        <div>
                            <textarea
                                className="contact-input message-textarea"
                                placeholder="СООБЩЕНИЕ..."
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);

                                    if (errors.message) {
                                        setErrors((prev) => ({
                                            ...prev,
                                            message: "",
                                        }));
                                    }
                                }}
                            />

                            {errors.message && (
                                <p className={styles.error_text}>
                                    {errors.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <button
                        className="header-button send-form-btn"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Отправка..." : "Отправить"}
                    </button>
                </div>
            </section>
        </main>

        <Footer />
    </>
  );
}