const router = require('express').Router();

router.get('/', (req, res) => res.render('auth', { title: 'Аутентификация' }));

module.exports = router;
