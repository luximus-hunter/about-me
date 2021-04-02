import { NextApiRequest, NextApiResponse } from 'next';

import about from '../../../data/about.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { lang } = req.query;
  const supportedLang: string[] = [];

  let data = null;

  about.map((e) => {
    supportedLang.push(e.lang);

    if (e.lang === lang) {
      data = e;
    }
  });

  if (data !== null) {
    res.status(200).json({
      error: false,
      message: 'fetched "about" in language ' + lang,
      data
    });
  } else {
    res.status(200).json({
      error: true,
      message: 'language not found. supported languages are:' + supportedLang.map((e) => ` ${e}`),
      data: null
    });
  }
};
