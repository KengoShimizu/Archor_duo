import React from 'react';
import { Paper } from '@material-ui/core';

import FormToPostCss from '../sass/FormToPost.scss';
import CommonCss from '../sass/CommonCss.scss';

const FormToPost: React.FC = () => {
  return (
    <div className={CommonCss.w90}>
      <div className={CommonCss.Title}>募集する</div>
      <Paper
        variant="outlined"
        className={FormToPostCss.Paper}>
        <p className={FormToPostCss.textFormLabel}>名前</p>
        <div className={FormToPostCss.textFormWrap}>
          <input className={FormToPostCss.textForm} type="text" name="" value="" />
        </div>
        <p className={FormToPostCss.textFormLabel}>ルームID</p>
        <div className={FormToPostCss.textFormWrap}>
          <input className={FormToPostCss.textForm} type="text" name="" value="" />
        </div>
        <p className={FormToPostCss.textFormLabel}>コメント</p>
        <div className={FormToPostCss.textFormWrap}>
          <textarea className={FormToPostCss.textForm} name="" value="" rows={3} cols={20} />
        </div>
        <input className={FormToPostCss.submitBtn} type="submit" name="" value="募集" />
      </Paper>
    </div>
  );
};

export default FormToPost;
