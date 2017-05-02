const router = require('express').Router();
const db = require('../core/db');

router.get('/', (req, res) => {
  db.resolves.findAll().then(result => {
    res.render('index', {
      title: 'Основная страница',
      info: `Добро пожаловать, ${req.user.username}`,
      resolves: result,
      root: req.user.root
    });
  });
});

module.exports = router;
