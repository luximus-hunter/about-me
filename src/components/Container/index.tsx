import styles from './container.module.scss';

interface Props {
    children: any;
}

const Container = ({ children }: Props) => <div className={styles.container}>{children}</div>;

export default Container;
