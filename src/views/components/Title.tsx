import React from 'react';
import { Typography } from '@material-ui/core';

import TitleCss from '../sass/TitleCss.scss';
import CommonCss from '../sass/CommonCss.scss';

const Title: React.FC = () => {
  return (
    <React.Fragment>
      <div className={CommonCss.Title}>マッチングロビー</div>
      <Typography
        className={TitleCss.titleText}
        variant="h1"
        color="textPrimary">
        ヒーローデュオ募集掲示板
      </Typography>
    </React.Fragment>
  );
};

export default Title;
