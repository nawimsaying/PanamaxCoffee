"use client";

import styles from "./header.module.css";
import React, { useEffect, useState } from "react";
import { Fade as Hamburger } from "hamburger-react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const body = document.body;
        const html = document.documentElement;

        return () => {
            body.style.position = "";
            body.style.top = "";
            body.style.left = "";
            body.style.right = "";
            body.style.overflow = "";
            html.style.overflow = "";
        };
    }, [isOpen, scrollY]);

    const ScrollTo = (id: string) => {
        setIsOpen(false);

        setTimeout(() => {
            const element = document.getElementById(id);

            if (element) {
                const headerOffset = 0;

                const elementPosition =
                    element.getBoundingClientRect().top + window.scrollY;

                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }, 200);
    };

    return (
        <header className={styles.header}>
            <div className={styles.padding}>
                <img
                    src="/logo.png"
                    alt="Panamax Logo"
                    className={styles.logo}
                />

                {/* Desktop navigation */}
                <div className={styles.button_group}>
                    <a onClick={() => ScrollTo("products")}>
                        АССОРТИМЕНТ
                    </a>

                    <a onClick={() => ScrollTo("about")}>
                        О НАС
                    </a>

                    <a onClick={() => ScrollTo("contact")}>
                        КОНТАКТЫ
                    </a>

                    <button
                        onClick={() => ScrollTo("contact")}
                        className="header-button"
                    >
                        Заказать зерна
                    </button>
                </div>

                {/* Mobile hamburger */}
                <div
                    className={styles.hamburger_mobile}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Hamburger toggled={isOpen} toggle={setIsOpen} />
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`${styles.mobile_header_container} ${
                    isOpen ? styles.open : ""
                }`}
            >
                <nav className={styles.mobile_nav}>
                    <a onClick={() => ScrollTo("products")}>
                        АССОРТИМЕНТ
                    </a>

                    <a onClick={() => ScrollTo("about")}>
                        О НАС
                    </a>

                    <a onClick={() => ScrollTo("contact")}>
                        КОНТАКТЫ
                    </a>
                </nav>
            </div>
        </header>
    );
}