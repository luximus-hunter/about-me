import { FC } from 'react';
import styles from './container.module.scss';

const Container: FC = ({ children }) => <div className={styles.Container}>{children}</div>;

export default Container;
