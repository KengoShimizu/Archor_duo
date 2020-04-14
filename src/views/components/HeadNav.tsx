import React from 'react';

import HeadNavCss from '../sass/HeadNavCss.scss';

const HeadNav: React.FC = () => {
  return (
    <div className={HeadNavCss.blur}>
      <p>
        アーチャー伝説攻略板
      </p>
    </div>
  );
};

export default HeadNav;
