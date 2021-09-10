import styles from './card.module.scss';

interface Props {
  title: string;
  info: string;
  image: string;
  link?: string;
}

const Card = ({ title, image, info, link }: Props) => (
  <div className={styles.container}>
    <img className={styles.logo} src={image} alt={title + '_logo'} />
    <div className={styles.content}>
      {link ? (
        <a href={link} className={styles.link}>
          <span className={styles.title}>{title}</span>
        </a>
      ) : (
        <span className={styles.title}>{title}</span>
      )}

      <span className={styles.info}>{info}</span>
    </div>
  </div>
);

export default Card;
