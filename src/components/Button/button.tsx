import { FC, Fragment, MouseEventHandler } from 'react';

import styles from './button.module.scss';
import { useHistory } from 'react-router';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  to?: string;
}

const Card: FC<Props> = ({ children, onClick, to }) => {
  const history = useHistory();

  const onLinkClick = () => {
    if (to) {
      history.push(to);
    }
  };

  return (
    <button className={styles.button} onClick={to ? onLinkClick : onClick}>
      {children}
    </button>
  );
};

export default Card;
