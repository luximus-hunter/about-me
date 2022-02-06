import styles from './footer.module.scss';

const Footer = () => {
    const startYear = "2021"
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <h1 className={styles.title}>&copy; Thomas Lipman, {startYear} - {currentYear}</h1>
        </footer>
    );
};

export default Footer;
