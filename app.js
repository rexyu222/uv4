const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("rex homepage 2");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log("API running on localhost");});