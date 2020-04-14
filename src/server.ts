import express from 'express';
const postController = require('./controllers/postController');

const app = express();

app.get('/', postController.doGetPostForSsr);

//静的ファイル
app.use(express.static('dist'))

app.listen(process.env.PORT || 3000, function () {
  console.log('express app is started.');
});
