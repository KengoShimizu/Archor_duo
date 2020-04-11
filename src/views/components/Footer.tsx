import React from 'react';

import FooterCss from '../sass/FooterCss.scss';

const Footer: React.FC = () => {
  return (
    <div className={FooterCss.footerWrap}>
      <div className={FooterCss.footer}>
        <div className={FooterCss.footerList}></div>
        <div className={FooterCss.copyRight}>Copyright (C) 2020 PersonalIndex</div>
      </div>
    </div>
  );
};

export default Footer;
