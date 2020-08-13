var express = require('express');
var router = express.Router();
var fs = require("fs");

/* UPDATE BOOK */
//router.post('/', function(req, res, next) {
 /* Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });*/
// console.log("rex put");
  //res.send('rexapi works');
//});
router.route('/').post( (req, res) => {
  
  console.log('rex post2: rex null');
  console.log('rex post2: '+ JSON.stringify(req.body));

  // var commentInfo= '\r\n' + req.body.message + '   SaveTime: ' + new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  var commentInfo= '\r\n'  + '\r\n'  + '   SaveTime: ' + new Date().toLocaleString("en-US", {timeZone: "America/New_York"})+'\r\n' + JSON.stringify(req.body);
  fs.appendFileSync('customerComment.txt', commentInfo, function(err){
    if (err) throw err;
    console.log('Saved');
  });

 // res.sendStatus(200);
  //res.send(200,  req.body);
  res.status(200).send(req.body);
})
module.exports = router;
