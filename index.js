const express = require('express');
const Post = require('./api/models/posts');
const postsData = new Post();
const app = express();

app.get('/api/posts', (req, res) => {
    res.status(200).send(postsData.get());
});

app.listen(3000, () => console.log('listening on port 3000'));