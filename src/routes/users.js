
const User = require('../models/user');
const UserSession = require('../models/user_session.js')

module.exports = function (app) {
  app.get("/signup", function (req, res) {
    res.render('signup');
  });

  app.post("/signup", function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let nickname = req.body.nickname

    User.create(nickname, email, password).then((user) => {
      res.redirect('/login');
    }).catch((err) => {
      console.log(err);
      res.render("signup", { error: true });
    });
  });

  app.get('/login', function (req, res) {
    res.render('login');
  })

  app.post('/login', function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    //正しいかどうかチェック
   
      User.authenticate(email, password).then((user) => {
        return UserSession.create(user);
      }).then((session) => {
        res.cookie("session_id", session.data.id, {
          path: "/",
          httpOnly: true,
          expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)),
          signed: true
        });
      /*if (users.length < 1) {
        throw new Error("User not found");
      }
      let user = users[0];
      let salt = user.data.salt;
      let sha512 = crypto.createHash('sha512');
      sha512.update(salt);
      sha512.update(pass);
      let hash = sha512.digest('hex');
      if (hash !== user.data.password) {
        throw new Error("Password is not match")*/
        res.redirect("/");
      }).catch((err) => {
        res.render("login", { error: true });
      })
    });
}