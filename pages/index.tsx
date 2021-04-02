import { FC, Fragment, useState } from 'react';

import Card from '../components/Card';
import Grid from '../components/Grid';
import Head from 'next/head';
import Image from 'next/image';
import styles from './home.module.scss';

const Home: FC = () => {
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);

  if (loading) {
    fetch('/api/about')
      .then((res) => {
        res.json().then((data) => {
          setContent(data.data.content);
          setTitle(data.data.title);
          setLoading(false);
        });
      })
      .catch(console.error);
  }

  return (
    <Fragment>
      <Head>
        <title>Thomas Lipman</title>
      </Head>
      <Grid centerItems cols={2}>
        <Card height="min-content">
          <img src='/pfp.png' className={styles.ProfilePicture} />
        </Card>
        <Card centerItems>
          <h1>{title}</h1>
          {content.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Card>
      </Grid>
      <Grid></Grid>
    </Fragment>
  );
};

export default Home;
