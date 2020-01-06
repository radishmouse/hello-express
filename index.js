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
app.get('/albums/:albumId/songs', (req, res) => {
    // "the songs for album 42"
    res.send(`the songs for album ${req.params.albumId}`);
});

// /albums/42/songs/3
app.get('/albums/:albumId/songs/:songId(\\d+)', (req, res) => {
    // "song 3 on album 42"
   res.send(`song ${req.params.songId} on album ${req.params.albumId}`); 
});

app.get('/albums/:albumId/songs/guest', (req, res) => {
    res.send('It had the best guest artists ever.');
});

// important: leading slash
// also important: order!

// add a catch-all
// - order matters. if this route handler is run by express
//   that means nothing above matched
// - '*' will match anything
// - res has methods....

app.get('*', (req, res) => {
    console.log("Redirecting, because no page here.");
    res.redirect('/albums');
})

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});