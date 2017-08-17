module.exports = function(app) {
  app.get("/", function(req, res) {
    if(!req.signedCookies.session_id){
      res.redirect('/login');
      return;
    }
    res.render("timeline")
  });

  require('./users')(app);//まとめて返す
    console.log('Example app listening on port 3000!');
};

