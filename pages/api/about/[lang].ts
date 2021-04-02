import { NextApiRequest, NextApiResponse } from 'next';

import about from '../../../data/about.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { lang } = req.query;

  let data = null;

  about.map((e) => {
    if (e.lang === lang) {
      data = e;
    }
  });

  if (data !== null) {
    res.statusCode = 200;
    res.json({
      error: false,
      message: 'fetched "about" in language ' + lang,
      data
    });
  } else {
    res.statusCode = 501;
    res.json({ error: true, message: 'language not found', data: null });
  }
};
