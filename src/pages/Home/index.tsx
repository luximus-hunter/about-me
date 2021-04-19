import { FC, Fragment, lazy, useEffect, useState } from 'react';

import Spinner from "../../components/Spinner";
import about from '../../data/about.json';
import config from '../../config.json';
import profilePicture from '../../assets/pfp.png';
import styles from './home.module.scss';

const Button = lazy(() => import('../../components/Button'));
const Card = lazy(() => import('../../components/Card'));
const Container = lazy(() => import('../../components/Container'));
const Flag = lazy(() => import('../../components/Flag'));
const Grid = lazy(() => import('../../components/Grid'));

interface Content {
  title: string;
  lines: string[];
}

const Home: FC = () => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<Content>();

  const changeLang = (newLang: string) => {
    const lang = localStorage.getItem('lang');

    if (newLang !== lang) {
      localStorage.setItem('lang', newLang);
    }

    loadData();
  };

  useEffect(() => {
    loadData();
  }, [content]);

  const loadData = () => {
    setLoading(true);

    const lang: any = localStorage.getItem('lang') || config.defaultLanguage;

    about.map((e) => {
      if (e.lang === lang) {
        setContent(e);
      }

      return true;
    });

    setLoading(false);
  };

  return (
    <Container>
        <Grid centerItems cols={2}>
          <Grid rows={2}>
            <Card centerItems>
              {loading ? (
                <Spinner />
              ) : (
                <img alt='me' src={profilePicture} className={styles.ProfilePicture} />
              )}
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
                <h1>{content?.title}</h1>
                {content?.lines?.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </Fragment>
            )}
          </Card>
        </Grid>
    </Container>
  );
};

export default Home;
