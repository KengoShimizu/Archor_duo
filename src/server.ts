import express from 'express';
const postController = require('./controllers/postController');

const app = express();

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');

app.get('/', postController.doGetPostForSsr);

//静的ファイル
app.use(express.static('dist'))

app.listen(process.env.PORT || 3000, function () {
  console.log('express app is started.');
});
