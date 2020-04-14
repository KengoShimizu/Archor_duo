import React from 'react';

import CommonCss from '../sass/CommonCss.scss';
import ContactCss from '../sass/ContactCss.scss';

const Footer: React.FC = () => {
  return (
    <div className={CommonCss.w90}>
      <div className={CommonCss.Title}>お問い合わせ</div>
      <p>ご不明点・改善点などあれば，下記メールアドレスまでお気軽にお問い合わせください．<br/>
      <span className={ContactCss.emailWrap}><span className={ContactCss.email}>email: </span>personalIndex777@gmail.com</span></p>
    </div>
  );
};

export default Footer;
