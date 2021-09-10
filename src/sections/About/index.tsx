import about from '../../data/about.json';
import styles from './about.module.scss';

const About = () => (
    <section className={styles.container}>
        {about.map((c, i) => (
            <p className={styles.paragraph} key={i}>
                {c}
            </p>
        ))}
    </section>
);

export default About;
