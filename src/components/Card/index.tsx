import Icon from '../Icon';
import { Icons } from '../Icon';
import styles from './card.module.scss';

interface Props {
    title: string;
    info?: string;
    icon: Icons;
    link?: string;
}

const Card = ({ title, icon, info, link }: Props) =>
    link ? (
        <a className={styles.container} href={link}>
            <Icon className={styles.icon} name={icon} />
            <div className={styles.content}>
                <span className={styles.title}>{title}</span>

                <span className={styles.info}>{info}</span>
            </div>
        </a>
    ) : (
        <div className={styles.container}>
            <Icon className={styles.icon} name={icon} />
            <div className={styles.content}>
                <span className={styles.title}>{title}</span>

                <span className={styles.info}>{info}</span>
            </div>
        </div>
    );

export default Card;
