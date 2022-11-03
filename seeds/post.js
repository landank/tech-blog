const { Post } = require('../models');
const postData = [{
        title: 'Lorem Ipsum dolor sit',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1

    },
    {
        title: 'Lorem Ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;