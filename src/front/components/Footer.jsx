import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={`${styles.footerEnhanced} mt-auto`}>
    <div className={styles.footerLogo}>Handly</div>

    <div className={styles.footerLinks}>
      <a href="/about">Sobre nosotros</a>
      <a href="/privacy">Privacidad</a>
      <a href="/terms">Términos</a>
    </div>

    <div className={styles.footerCopy}>
      © {new Date().getFullYear()} Handly. Compra y vende cerca de ti.
    </div>
  </footer>
);