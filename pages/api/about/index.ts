import { NextApiRequest, NextApiResponse } from 'next';

import about from '../../../data/about.json';
import config from '../../../config.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  let data = null;

  about.map((e) => {
    if (e.lang === config.DefaultLanguage) {
      data = e;
    }
  });

  if (data !== null) {
    res.statusCode = 200;
    res.json({
      error: false,
      message: 'fetched "about" in language ' + config.DefaultLanguage,
      data
    });
  } else {
    res.statusCode = 501;
    res.json({ error: true, message: 'language not found', data: null });
  }
};