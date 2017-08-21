
module.exports = function (app) {
  app.get("/", function (req, res) {
    if (!res.locals.currentUser) {
      res.redirect('/login');
      return;
    }

      res.render("timeline");//表示
  });



  require('./users')(app);//謎
  require('./api')(app);

  require('./users')(app);//まとめて返す
  console.log('Example app listening on port 3000!');
}

