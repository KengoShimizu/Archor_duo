import express from 'express';

const Posts = require('../models/Posts');
const ssrController = require('./ssrController');

module.exports = {
  doGetPostForSsr: (req: express.Request, res: express.Response) => {
    Posts.getPost().then((result) => {
      const elements = ssrController.ssr(result);
      res.render("html", elements);
    }).catch((err) => {console.log(err);})
  }
}
