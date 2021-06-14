import { CSSProperties, FC } from 'react';

import styles from './card.module.scss';

interface Props {
  height?: number | string;
  centerItems?: boolean;
}

const Card: FC<Props> = ({ children, height, centerItems = false }) => {
  const style: CSSProperties = {
    height
  };

  if (centerItems) {
    style.display = 'grid';
    style.placeItems = 'center';
    style.textAlign = 'center';
  }

  return (
    <div style={style} className={styles.card}>
      {children}
    </div>
  );
};

export default Card;
