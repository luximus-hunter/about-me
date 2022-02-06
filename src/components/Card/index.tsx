import Icon from '../Icon';
import { Icons } from '../Icon';
import styles from './card.module.scss';

interface Props {
    title: string;
    info?: string;
    icon: Icons;
    link?: string;
    small?: boolean;
}

const Card = ({ title, icon, info, link, small }: Props) => {
    const className = small ? `${styles.container} ${styles.small}` : styles.container;

    return link ? (
        <a className={className} href={link}>
            <Icon className={styles.icon} name={icon} />
            <div className={styles.content}>
                <span className={styles.title}>{title}</span>

                <span className={styles.info}>{info}</span>
            </div>
        </a>
    ) : (
        <div className={className}>
            <Icon className={styles.icon} name={icon} />
            <div className={styles.content}>
                <span className={styles.title}>{title}</span>

                <span className={styles.info}>{info}</span>
            </div>
        </div>
    );
};

export default Card;
