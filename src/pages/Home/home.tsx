import { FC, Fragment, useEffect, useState } from 'react';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import Spinner from '../../components/Spinner';
import View from '../../components/View';
import about from '../../data/about.json';
import config from '../../config.json';
import profilePicture from '../../assets/profile-picture-outline.png';
import styles from './home.module.scss';

interface Content {
  title: string;
  lines: string[];
  lang: string;
}

interface RouterProps {
  lang: string;
}

interface Props extends RouteComponentProps<RouterProps> {}

const Home: FC<Props> = ({ match }) => {
  const history = useHistory();

  const { lang } = match.params;

  const [content, setContent] = useState<Content>();

  const loadData = () => {
    if (lang === content?.lang) {
      return;
    }

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
  };

  loadData();

  return (
    <View
      centerItems
      style={{ backgroundImage: 'linear-gradient(30deg, rgb(236, 136, 36), rgb(197, 75, 197))' }}
    >
      <div className={styles.container}>
        <img src={profilePicture} className={styles.profile_picture} />
        <div className={styles.text_container}>
          <div>
            <h2>Junior</h2>
            <h1>UI/UX Developer</h1>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Button>My Skills</Button>
      </div>
    </View>
  );
};

export default Home;
