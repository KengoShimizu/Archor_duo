import express from 'express';
import sampleController from './controllers/sampleController';

const app = express();

app.get('/', sampleController);

//静的ファイル
app.use(express.static('dist'))

app.listen(process.env.PORT || 3000, function () {
  console.log('express app is started.');
});
