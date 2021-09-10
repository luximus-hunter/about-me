import styles from './row.module.scss';

interface Props {
  children?: any;
}

const Row = ({ children }: Props) => <div className={styles.row}>{children}</div>;

export default Row;
