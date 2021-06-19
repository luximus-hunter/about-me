import { CSSProperties, FC } from 'react';

import styles from './view.module.scss';

interface Props {
  centerItems?: boolean;
  color?: string;
  image?: string;
  style?: CSSProperties;
}

const View: FC<Props> = ({ children, centerItems = false, color, image, style }) => {
  let css: CSSProperties = {};

  if (style) {
    css = style;
  }

  if (centerItems) {
    css.display = 'grid';
    css.placeItems = 'center';
    css.textAlign = 'center';
  }

  if (color) {
    css.backgroundColor = color;
  }

  if (image) {
    css.backgroundImage = 'url(image)';
  }

  return (
    <div style={css} className={styles.view}>
      {children}
    </div>
  );
};

export default View;
