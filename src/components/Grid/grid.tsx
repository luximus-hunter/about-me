import { CSSProperties, FC } from 'react';

import styles from './grid.module.scss';

interface Props {
  cols?: number;
  rows?: number;
  centerItems?: boolean;
}

const Grid: FC<Props> = ({ children, cols = 1, rows = 1, centerItems = false }) => {
  let colsValue: string = '';
  let rowsValue: string = '';

  const value = 'auto';

  for (let i: number = 0; i < cols; i++) {
    colsValue += value + ' ';
  }

  for (let i: number = 0; i < rows; i++) {
    rowsValue += value + ' ';
  }

  const style: CSSProperties = {
    gridTemplateColumns: colsValue.trim(),
    gridTemplateRows: rowsValue.trim()
  };

  if (centerItems) {
    style.textAlign = 'center';
  }

  return (
    <div style={style} className={styles.grid}>
      {children}
    </div>
  );
};

export default Grid;
