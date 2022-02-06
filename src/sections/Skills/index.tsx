import Card from '../../components/Card';
import { Icons } from '../../components/Icon';
import skills from '../../data/skills.json';
import styles from './skills.module.scss';

interface SkillItem {
    name: string;
    info: string;
    icon: Icons;
    link?: string;
}

const formatedSkills: SkillItem[] = [...skills] as SkillItem[];

const Skills = () => (
    <section id='Skills' className={styles.color}>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.container}>
            {formatedSkills.map((item, i) => (
                <Card small key={i} title={item.name} icon={item.icon} link={item.link} />
            ))}
        </div>
    </section>
);

export default Skills;
