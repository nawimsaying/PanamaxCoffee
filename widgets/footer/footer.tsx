import styles from "./footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.padding}>
                <div className={styles.section}>
                    <p className={styles.title}>АДРЕС</p>

                    <p className={styles.mono}>г. Волгоград, ул. 8-й Воздушной Армии, д. 11Б</p>
                </div>

                <div className={styles.section}>
                    <p className={styles.title}>ТЕЛЕФОН</p>

                    <a href="tel:+79956966225" className={styles.mono}>
                        +7 (995) 696-62-25
                    </a>
                </div>

                <div className={styles.section} style={{ margin: 'auto', marginRight: 0 }}>
                    <p className={styles.title}>НАШИ СОЦ. СЕТИ</p>

                    <div className={styles.socials}>
                        <a href="https://t.me/panamaxcoffeevlg" target="_blank" rel="noopener noreferrer">
                            <img src="/tg.svg" alt="Telegram" className={styles.social_icon} />
                        </a>
                        <a href="https://vk.com/panamax.coffee" target="_blank" rel="noopener noreferrer">
                            <img src="/vk.svg" alt="VK" className={styles.social_icon} />
                        </a>
                        <a href="https://wa.me/79956966225" target="_blank" rel="noopener noreferrer">
                            <img src="/wapp.svg" alt="WhatsApp" className={styles.social_icon} />
                        </a>
                        <a href="https://www.instagram.com/panamax.coffee?igsh=ZjkzMTBoZzNxa2hx" target="_blank" rel="noopener noreferrer">
                            <img src="/ig.svg" alt="Instagram" className={styles.social_icon} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}