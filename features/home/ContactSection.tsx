"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "./ui.module.css";

interface ContactSectionProps {
    scrollToId?: string;
}

export function ContactSection({ scrollToId }: ContactSectionProps) {
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

        if (newErrors.name || newErrors.email) {
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

    return (
        <section className={styles.contact_container} id={scrollToId || "contact"}>
            <div className={styles.main_padding}>
                <h3 className={styles.h3}>ОСТАВЬТЕ <span className={styles.span}>ЗАЯВКУ</span><br/>И МЫ С ВАМИ СВЯЖЕМСЯ</h3>

                <p className={styles.contact_desc}>(ИЛИ НАПИШИТЕ НАМ В СОЦ. СЕТЯХ)</p>

                <div className={styles.socials}>
                    <a href="https://wa.me/79956966225" target="_blank" rel="noopener noreferrer">
                        <Image className={styles.social} src="/wapp.svg" alt="whatsapp" width={800} height={600} />
                    </a>
                    <a href="https://t.me/panamaxcoffeevlg" target="_blank" rel="noopener noreferrer">
                        <Image className={styles.social} src="/tg.svg" alt="telegram" width={800} height={600} />
                    </a>
                    <a href="https://vk.com/panamax.coffee" target="_blank" rel="noopener noreferrer">
                        <Image className={styles.social} src="/vk.svg" alt="vk" width={800} height={600} />
                    </a>
                    <a href="https://www.instagram.com/panamax.coffee?igsh=ZjkzMTBoZzNxa2hx" target="_blank" rel="noopener noreferrer">
                        <Image className={styles.social} src="/ig.svg" alt="instagram" width={800} height={600} />
                    </a>
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
                                <p className={styles.error_text}>{errors.name}</p>
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
                                <p className={styles.error_text}>{errors.email}</p>
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
                            <p className={styles.error_text}>{errors.message}</p>
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
    );
}
