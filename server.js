require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'front end', 'build')));

//-----------------------------------------------------------------------










//-----------------------------------------------------------------------

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'front end', 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started...");
});