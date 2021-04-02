import { FC } from 'react';

interface Props {
  lang: 'nl' | 'gb' | 'de';
  className?: string;
}

const Flag: FC<Props> = ({ lang = 'eu', className }) => (
  <img className={className} src={`https://flagcdn.com/h40/${lang}.png`} alt={`flag-${lang}`} />
);

export default Flag;
