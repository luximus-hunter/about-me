import { CSSProperties, FC } from 'react';

import styles from './view.module.scss';

interface Props {
  centerItems?: boolean;
  color?: string;
  image?: string;
}

const View: FC<Props> = ({ children, centerItems = false, color, image }) => {
  const style: CSSProperties = {};

  if (centerItems) {
    style.display = 'grid';
    style.placeItems = 'center';
    style.textAlign = 'center';
  }

  if (color) {
    style.backgroundColor = color;
  }

  if (image) {
    style.backgroundImage = 'url(image)';
  }

  return (
    <div style={style} className={styles.view}>
      {children}
    </div>
  );
};

export default View;
