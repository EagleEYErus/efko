const router = require('express').Router();
const db = require('../core/db');
const md5 = require('md5');

router
  .get('/', (req, res) => {
    if (req.user.root !== 2) {
      res.render('add', {title: 'Добавить', root: req.user.root});
    } else {
      res.redirect('/');
    }
  })
  .get('/user', (req, res) => {
    if (req.user.root === 3) {
      res.render('addUser', {title: 'Регистрация пользователя'});
    } else {
      res.redirect('/');
    }
  })
  .post('/', (req, res) => {
    const addResolve = {}
    if (req.body.problem) {
      addResolve.problem = req.body.problem;
    }
    if (req.body.resolve) {
      addResolve.resolve = req.body.resolve;
    }
    if (req.body.rate) {
      addResolve.rate = req.body.rate;
    }
    db.resolves
      .create(addResolve)
      .then(() => {
        res.redirect('/');
      });
  })
  .post('/user', (req, res) => {
    db.users
      .create({
        username: req.body.username,
        password: md5(req.body.password),
        root: req.body.root
      })
      .then(() => {
        res.redirect('/');
      });
  });

module.exports = router;
