const { User } = require('../models');
const userData = [{
    username: 'Landank',
    password: 'landen'

},
{
    username: 'johnwick',
    password: 'john.wick'
}
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;