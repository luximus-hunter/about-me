import { FC, Fragment, useState } from 'react';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';

import Card from '../../components/Card';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import Spinner from '../../components/Spinner';
import View from '../../components/View';
import about from '../../data/about.json';
import config from '../../config.json';
import profilePicture from '../../assets/profile-picture.jpg';
import styles from './skills.module.scss';

interface RouterProps {
  lang: string;
}

interface Props extends RouteComponentProps<RouterProps> {}

const Home: FC<Props> = ({ match }) => {
  const history = useHistory();
  const { lang } = match.params;

  return (
    <Fragment>
      <View color='' centerItems>
        Skill page
      </View>
    </Fragment>
  );
};

export default Home;
