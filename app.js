const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');
const session = require('cookie-session');
const passport = require('passport');
const md5 = require('md5');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./core/db');

const index = require('./routes/index');
const add = require('./routes/add');
const edit = require('./routes/edit');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({keys:['NodeJS Development']}));

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy((username, password, done) => {
  db.users.findOne({where: {username}}).then(result => {
    if (result === null) return done("Такого пользователя не существует", false);
    if (username === result.username && md5(password) === result.password) {
      return done(null, result);
    } else {
      return done("Неверный логин или пароль", false);
    }
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  db.users.findOne({where: {id}}).then(result => done(null, result));
});

const auth = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth'
});

const mustBeAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/auth');
  }
}

app.all('/', mustBeAuthenticated);
app.all('/add', mustBeAuthenticated);
app.all('/add/user', mustBeAuthenticated);
app.all('/edit', mustBeAuthenticated);

app.post('/auth', auth)
app.get('/auth', (req, res) => res.render('auth', { title: 'Аутентификация' }));

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.use('/', index);
app.use('/add', add);
app.use('/edit', edit);

app.get('*', (req, res) => res.redirect('/'));

http.createServer(app).listen(3000, () => {
  console.log(`Server running at port 3000`);
});
