const router = require('express').Router();
const db = require('../core/db');

router
  .get('/all/id/:id', (req, res) => {
    if (req.user.root === 3) {
      db.resolves
        .findOne({
          where: {
            id: req.params.id
          }
        })
        .then(result => {
          res.render('editAll', {
            title: 'Редактирование',
            resolve: result
          });
        })
    } else {
      res.render('rootDenied');
    }
  })
  .get('/problem/id/:id', (req, res) => {
    if (req.user.root === 1 || req.user.root === 3) {
      res.render('editProblem');
    } else {
      res.render('rootDenied');
    }
  })
  .get('/rate/id/:id', (req, res) => {
    if (req.user.root === 2 || req.user.root === 3) {
      res.render('editRate');
    } else {
      res.render('rootDenied');
    }
  })
  .post('/', (req, res) => {
    const editResolve = {}
    if (req.body.problem) {
      editResolve.problem = req.body.problem;
    }
    if (req.body.resolve) {
      editResolve.resolve = req.body.resolve;
    }
    if (req.body.rate) {
      editResolve.rate = req.body.rate;
    }
    db.resolves
      .update(editResolve, {
        where: {
          id: req.body.id
        }
      })
      .then(function() {
        res.redirect('/');
      });
  });

module.exports = router;
