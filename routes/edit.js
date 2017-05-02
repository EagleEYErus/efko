const router = require('express').Router();
const db = require('../core/db');

router
  .get('/id/:id', (req, res) => {
    db.resolves
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(result => {
        res.render('edit', {
          title: 'Редактирование',
          resolve: result,
          root: req.user.root
        });
      })
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
