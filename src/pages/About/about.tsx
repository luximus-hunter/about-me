import { FC, Fragment, useEffect, useState } from 'react';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';

import Card from '../../components/Card';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import Spinner from '../../components/Spinner';
import about from '../../data/about.json';
import config from '../../config.json';
import profilePicture from '../../assets/profile-picture.jpg';
import styles from './about.module.scss';

interface Content {
  title: string;
  lines: string[];
  lang: string;
}

interface RouterProps {
  lang: string;
}

interface Props extends RouteComponentProps<RouterProps> {}

const About: FC<Props> = ({ match }) => {
  const history = useHistory();

  const { lang } = match.params;

  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<Content>();

  const loadData = () => {
    if (lang === content?.lang) {
      return;
    }

    setLoading(true);

    let redirect = true;

    about.map((e) => {
      if (e.lang === lang) {
        setContent(e);
        redirect = false;
      }
    });

    if (redirect) {
      setContent(about[0]);
      history.push('/' + config.defaultLanguage);
    }

    setLoading(false);
  };

  loadData();

  return (
    <Container>
      <Grid centerItems cols={2}>
        <Grid rows={2}>
          <Card centerItems>
            {loading ? (
              <Spinner />
            ) : (
              <img alt='me' src={profilePicture} className={styles.profile_picture} />
            )}
          </Card>
          <Card centerItems>
            <div>
              <Link to='/en'>View in English</Link>
            </div>
            <div>
              <Link to='/nl'>Bekijk in het Nederlands</Link>
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

export default About;
