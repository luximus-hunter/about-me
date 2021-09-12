import about from '../../data/about.json';
import styles from './about.module.scss';

const About = () => (
    <section id='About' className={styles.color}>
        <div className={styles.container}>
            <h1 className={styles.title}>{about.title}</h1>
            {about.content.map((c, i) => (
                <p className={styles.paragraph} key={i}>
                    {c}
                </p>
            ))}
        </div>
    </section>
);

export default About;
