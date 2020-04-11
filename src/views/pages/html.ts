interface arguments{
  elements: {
    css: string;
    initialStyleTag: string;
    header: string;
    headnav: string;
    root: string;
    footer: string;
  }
}

const html = ( {elements} : arguments ) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="ページの内容を表す文章" />

      <!-- favicon -->
      <link rel="icon" href="#" sizes="16x16" type="image/png" />

      <!-- Twitterカード -->
      <meta property="og:url" content="ページのURL" />
      <meta property="og:title" content="ページのタイトル" />
      <meta property="og:type" content="ページのタイプ">
      <meta property="og:description" content="記事の抜粋" />
      <meta property="og:image" content="画像のURL" />
      <meta name="twitter:card" content="カード種類" />
      <meta name="twitter:site" content="@Twitterユーザー名" />
      <meta property="og:site_name" content="サイト名" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="fb:app_id" content="appIDを入力" />

      <!-- スマホページ保存時表示画像 -->
      <link rel="apple-touch-icon-precomposed" href="#" />

      <style>${elements.css}</style>
      ${elements.initialStyleTag}
      <title>Title</title>
    </head>
    <body style="margin: 0;">
      <div id="header">${elements.header}</div>
      <div id="headnav" style="height: 200px;">${elements.headnav}</div>
      <div id="root">${elements.root}</div>
      <div id="footer">${elements.footer}</div>
    </body>
    <script src="js/bundle.js" defer></script>
  </html>
`;

export default html;
