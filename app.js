const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'archivesEng')));
app.use(express.static(path.join(__dirname, 'archivesMand')));
app.use(express.static(path.join(__dirname, 'image')));
app.get('/', (req, res) => {
    res.send("rex homepage 3");
});

//debug begin
const fs = require("fs");
console.log('rex post2: fs begin ');

  // var commentInfo= '\r\n' + req.body.message + '   SaveTime: ' + new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  var commentInfo= '\r\n'  + '\r\n'  + '   SaveTime: ' + new Date().toLocaleString("en-US", {timeZone: "America/New_York"})+'\r\n' + 'rex2commentusroute';
  fs.appendFileSync('customerComment.txt', commentInfo, function(err){
    if (err) throw err;
    console.log('Saved');
  });
  console.log('rex post2: fs end ');
//debug end  

//set commentUs routes
app.use('/urlLogsave', require('./urlLogRoutes/urlLogRoute'));

//set commentUs routes
app.use('/commentussave', require('./commentUsRoutes/commentUsRoute'));

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log("API running on localhost");});