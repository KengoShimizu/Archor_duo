import express from 'express';

const Posts = require('../models/Posts');
const ssrController = require('./ssrController');

module.exports = {
  doGetPostForSsr: (req: express.Request, res: express.Response) => {
    Posts.getPost().then((result) => {
      res.send(ssrController.ssr(result));
    }).catch(() => {console.log('error');})
  }
}
