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

                    <p className={styles.mono}>+7 (995) 696-62-25</p>
                </div>

                <div className={styles.section}>
                    <p className={styles.title}>ПОЧТА</p>

                    <p className={styles.mono}>test@gmail.com</p>
                </div>

                <div className={styles.section}>
                    <p className={styles.title}>НАШИ СОЦ. СЕТИ</p>

                    <div className={styles.socials}>
                        <img src="/tg.svg" alt="Telegram" className={styles.social_icon} />
                        <img src="/vk.svg" alt="VK" className={styles.social_icon} />
                        <img src="/wapp.svg" alt="WhatsApp" className={styles.social_icon} />
                    </div>
                </div>
            </div>
        </footer>
    );
}