import { FC, Fragment, useEffect, useState } from 'react';

import Button from '../components/Button';
import Card from '../components/Card';
import Flag from '../components/Flag';
import Grid from '../components/Grid';
import Head from 'next/head';
import Spinner from '../components/Spinner';
import styles from './home.module.scss';

interface Content {
  title: string;
  lines: string[];
}

const Home: FC = () => {
  const initContent: Content = {
    title: '',
    lines: []
  };
  const [content, setContent] = useState(initContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [content !== initContent]);

  const changeLang = (newLang: string) => {
    const lang = localStorage.getItem('lang');

    if (newLang !== lang) {
      localStorage.setItem('lang', newLang);

      loadData();
    }
  };

  const loadData = () => {
    setLoading(true);

    const lang = localStorage.getItem('lang');

    fetch('/api/about/' + lang)
      .then((response) => {
        response.json().then((json) => {
          setContent(json.data);
          setLoading(false);
        });
      })
      .catch(console.error);
  };

  return (
    <Fragment>
      <Head>
        <title>Thomas Lipman</title>
      </Head>
      <Grid centerItems cols={2}>
        <Grid rows={2}>
          <Card centerItems>
            <img src='/pfp.png' className={styles.ProfilePicture} />
          </Card>
          <Card centerItems>
            <div>
              <Button onClick={() => changeLang('nl')}>
                <Flag className={styles.Flag} lang='nl' />
              </Button>
              <Button onClick={() => changeLang('en')}>
                <Flag className={styles.Flag} lang='gb' />
              </Button>
            </div>
          </Card>
        </Grid>
        <Card centerItems>
          {loading ? (
            <Spinner />
          ) : (
            <Fragment>
              <h1>{content.title}</h1>
              {content.lines?.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </Fragment>
          )}
        </Card>
      </Grid>
      <Grid></Grid>
    </Fragment>
  );
};

export default Home;
