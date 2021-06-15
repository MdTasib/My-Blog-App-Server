const express = require('express');
const Post = require('./api/models/posts');
const postsData = new Post();
const app = express();

app.get('/api/posts', (req, res) => {
    res.status(200).send(postsData.get());
});

app.get('/api/posts/:post_id', (req, res) => {
    const postId = req.params.post_id;
    const foundPost = postsData.getIndividualBlog(postId);
    if (foundPost) {
        res.status(200).send(foundPost);
    } else {
        res.status(404).send('Not Found');
    }
})

app.listen(3000, () => console.log('listening on port 3000'));