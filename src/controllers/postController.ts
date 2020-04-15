import express from 'express';
const { validationResult } = require('express-validator');

const Posts = require('../models/Posts');
const ssrController = require('./ssrController');

module.exports = {
  doGetPostForSsr: (req: express.Request, res: express.Response) => {
    Posts.getPost().then((result) => {
      const elements = ssrController.ssr(result);
      res.render("html", elements);
    }).catch((err) => {console.log(err);})
  },
  doGetPostToUpdate: (req: express.Request, res: express.Response) => {
    Posts.getPost().then((result) => {
      res.send(result);
    }).catch((err) => {console.log(err);})
  },
  doSubmitPost: (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw errors;
    }
    else{
      Posts.submitPost(req.body)
    }
  },
}
