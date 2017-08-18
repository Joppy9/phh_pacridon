module.exports = function(app){
  app.ws('/api/timeline',function(ws,req){
    ws.on('message',(message)=>{
      console.log(message);
    })
  });
}
