import Card from '../../components/Card';
import { Icons } from '../../components/Icon';
import socials from '../../data/socials.json';
import styles from './socials.module.scss';

interface SocialItem {
    name: string;
    info: string;
    icon: Icons;
    link?: string;
}

const formatedSocials: SocialItem[] = [...socials] as SocialItem[];

const Socials = () => (
    <section id='Socials' className={styles.color}>
        <h1 className={styles.title}>Socials</h1>
        <div className={styles.container}>
            {formatedSocials.map((item, i) => (
                <Card
                    key={i}
                    title={item.name}
                    info={item.info}
                    icon={item.icon}
                    link={item.link}
                />
            ))}
        </div>
    </section>
);

export default Socials;
