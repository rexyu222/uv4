const express = require('express');
const app = express();
const path = require('path');

const cors= require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'archivesEng')));
app.use(express.static(path.join(__dirname, 'archivesMand')));
app.use(express.static(path.join(__dirname, 'image')));
app.get('/', (req, res) => {
    res.send("rex homepage 3");
});


const bodyParser= require('body-parser');
const jsonParser= bodyParser.json();

//set commentUs routes
//app.use('/commentussave', require('./commentUsRoutes/commentUsRoute'));
var fs = require("fs");
app.post('/commentussave', jsonParser, function(req, res)  {
  
  console.log('rex post2: rex null');
  console.log('rex post2: '+ JSON.stringify(req.body));

  // var commentInfo= '\r\n' + req.body.message + '   SaveTime: ' + new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
 // var commentInfo= '\r\n'  + '\r\n'  + '   SaveTime: ' + new Date().toLocaleString("en-US", {timeZone: "America/New_York"})+'\r\n' + JSON.stringify(req.body);
  var commentInfo= '\r\n'  + '\r\n'  + '   SaveTime: ' + new Date().toLocaleString("en-US", {timeZone: "America/New_York"})+'\r\n' + JSON.stringify(req.body);
  fs.appendFileSync('customerComment.txt', commentInfo, function(err){
    if (err) throw err;
    console.log('Saved');
  });

 // res.sendStatus(200);
  //res.send(200,  req.body);
  res.status(200).send(req.body);
});


//set commentUs routes
app.post('/urlLogsave', jsonParser, function(req, res)  {
  var urlLogInfo= '\r\n'   + '   SaveTime: ' + new Date().toLocaleString("en-US", {timeZone: "America/New_York"})+'\r\n' + JSON.stringify(req.body);
  fs.appendFileSync('urlLog.txt', urlLogInfo, function(err){
    if (err) throw err;
    console.log('Saved');
  });

 // res.sendStatus(200);
  //res.send(200,  req.body);
  res.status(200).send(req.body);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {console.log("API running on localhost");});