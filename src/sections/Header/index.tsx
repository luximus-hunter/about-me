import headerImg from '../../assets/banner/banner.jpg';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.container}>
    <img className={styles.banner} src={headerImg} alt='website_banner' />
  </header>
);

export default Header;
