const http = require('http');
const PORT = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    console.log('Got a request!!!');
    res.send('Hello Express!');
});

app.get('/albums', (req, res) => {
    res.send('a list of albums');
});

// :albumId is a *placeholder*
// can't match the following:
// ? & = % /
app.get('/albums/:albumId', (req, res) => {
    // Express puts your
    res.send(`You want: ${req.params.albumId}`);
});

// /albums/42/songs 
// "the songs for album 42"

// /albums/42/songs/3
// "song 3 on album 42"


// add a catch-all

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});