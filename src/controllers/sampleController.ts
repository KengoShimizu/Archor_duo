import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { collectInitial } from 'node-style-loader/collect';

import html from '../views/pages/html';
import Root from '../views/components/Root';
import Header from "../views/components/Header";
import HeadNav from "../views/components/HeadNav";
import Footer from "../views/components/Footer";

export default (req: express.Request, res: express.Response)  => {
    const root = renderToString(React.createElement(Root));
    const header = renderToString(React.createElement(Header));
    const headnav = renderToString(React.createElement(HeadNav));
    const footer = renderToString(React.createElement(Footer));

    //cssの生html取得
    const sheets = new ServerStyleSheets();
    renderToString(
      sheets.collect(
        React.createElement(Header)
      )
    );
    let css = sheets.toString();

    const initialStyleTag = collectInitial();

    const elements = { css, initialStyleTag, header, headnav, root, footer };

    res.send(
      html({elements})
    );
}
