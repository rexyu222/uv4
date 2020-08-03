// Get dependencies
const express = require('express');
//const path = require('path');

const app = express();


app.get('/', (req, res) => {
//  res.sendFile(path.join(__dirname, 'dist/rexTechAObservableVsNGRX/index.html'));
 // res.sendFile(path.join(__dirname, 'dist/usEnermyscss6/index.html'));
    res.send("rex homepage");
});
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
//app.set('port', port);
/**
 * Create HTTP server.
 */
//var server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
//server.listen(port, () => console.log(`API running on localhost:${port}`));

app.listen(port, () => {console.log(`API running on localhost:${port}`);});