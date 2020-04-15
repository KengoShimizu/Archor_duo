import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { collectInitial } from 'node-style-loader/collect';

import BeforeDB from "../views/components/BeforeDB";
import PostsRender from "../views/components/PostsRender";
import AfterDB from "../views/components/AfterDB";

module.exports = {
  ssr: (result: {name: string; roomID: string; comment: string; posttime: Date;}[]) => {
    const beforeDB = renderToString(React.createElement(BeforeDB));
    const postsrender = renderToString(React.createElement(PostsRender, {result}));
    const afterDB = renderToString(React.createElement(AfterDB));

    //cssの生html取得(Material-UIのcss化)
    const sheets1 = new ServerStyleSheets();
    renderToString(
      sheets1.collect(
        React.createElement(BeforeDB)
      )
    );
    const sheets2 = new ServerStyleSheets();
    renderToString(
      sheets2.collect(
        React.createElement(PostsRender, {result})
      )
    );
    const sheets3 = new ServerStyleSheets();
    renderToString(
      sheets3.collect(
        React.createElement(AfterDB)
      )
    );
    const css = sheets1.toString() + sheets2.toString() + sheets3.toString();

    const initialStyleTag = collectInitial();

    return { css: css,
             initialStyleTag: initialStyleTag,
             beforeDB: beforeDB,
             postsrender: postsrender,
             afterDB: afterDB,
             result: result };
  }
}
