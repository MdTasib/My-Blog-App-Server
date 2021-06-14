const PATH = './data.json';
const fs = require('fs');

class Post {
    get() {
        // Get posts
        return this.readData();
    }

    getIndividualBlog() {
        // Get One Blog Post

    }

    add() {
        // Add new post

    }

    readData() {
        let rawData = fs.readFileSync(PATH);
        let posts = JSON.parse(rawData);
        return posts;
    }
}

module.exports = Post;