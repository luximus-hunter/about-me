import arrowImg from '../../assets/header/arrow.png';
import avatarImg from '../../assets/header/avatar.png';
import headerImg from '../../assets/header/banner.jpg';
import styles from './header.module.scss';

const Header = () => (
    <header className={styles.container}>
        <img className={styles.banner} src={headerImg} alt='website_banner' />
        <div className={styles.center_container}>
            <img className={styles.avatar} src={avatarImg} alt='avatar' />
            <img className={styles.arrow} src={arrowImg} alt='down_arrow' />
        </div>
    </header>
);

export default Header;
