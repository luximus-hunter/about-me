import { FC } from 'react';
import styles from './spinner.module.scss';

interface Props {}

const Spinner: FC<Props> = () => <div className={styles.Spinner} />;

export default Spinner;
