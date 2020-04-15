import express from 'express';
const postController = require('./controllers/postController');
const { check } = require('express-validator');
var bodyParser = require('body-parser');

const app = express();

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const validate = [
  check('roomID').isLength({ min: 1, max: 10 }).isAlphanumeric().not().isEmpty(),
  check('posttime').not().isEmpty()
];

app.get('/', postController.doGetPostForSsr);
app.post('/', postController.doGetPostToUpdate);
app.post('/submit', validate, postController.doSubmitPost);

//静的ファイル
app.use(express.static('dist'))

app.listen(process.env.PORT || 3000, function () {
  console.log('express app is started.');
});
