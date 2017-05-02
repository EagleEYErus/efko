const router = require('express').Router();
const db = require('../core/db');

router
  .get('/', (req, res) => {
    if (req.user.root === 3) {
      res.render('add', {title: 'Добавить'});
    } else {
      res.render('rootDenied');
    }
  })
  .post('/', (req, res) => {
    db.resolves
      .create({
        problem: req.body.problem,
        resolve: req.body.resolve,
        rate: parseInt(req.body.rate)
      })
      .then(() => {
        res.redirect('/');
      });
  });

module.exports = router;
