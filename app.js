const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'archivesEng')));
app.use(express.static(path.join(__dirname, 'archivesMand')));
app.use(express.static(path.join(__dirname, 'image')));
app.get('/', (req, res) => {
    res.send("rex homepage 3");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log("API running on localhost");});