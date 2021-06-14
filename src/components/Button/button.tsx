import { FC, MouseEventHandler } from 'react';

import styles from './button.module.scss';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Card: FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Card;
