import { FC, MouseEventHandler } from 'react';

import styles from './button.module.scss';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
}

const Card: FC<Props> = ({ children, onClick, active = false }) => {
  return (
    <button className={active ? styles.ButtonActive : styles.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Card;
