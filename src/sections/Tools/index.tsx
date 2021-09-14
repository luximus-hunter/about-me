import Card from '../../components/Card';
import { Icons } from '../../components/Icon';
import styles from './tools.module.scss';
import tools from '../../data/tools.json';

interface SkillItem {
    name: string;
    info: string;
    icon: Icons;
}

const formatedTools: SkillItem[] = [...tools] as SkillItem[];

const Tools = () => (
    <section id='Tools' className={styles.color}>
        <h1 className={styles.title}>Tools</h1>
        <div className={styles.container}>
            {formatedTools.map((item, i) => (
                <Card key={i} title={item.name} icon={item.icon} />
            ))}
        </div>
    </section>
);

export default Tools;
