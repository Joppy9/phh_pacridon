module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send("Initialized!: ");
  });

  require('./users')(app);//まとめて返す
    console.log('Example app listening on port 3000!');
};

