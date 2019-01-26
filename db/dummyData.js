const dbConnection = require('./dbConnection');
const User = require('./User');

dbConnection();

const createData = async () => {
  const newUser = new User({
    name: 'Nadia',
    age: '15'
  });
  await newUser
    .save()
    .then(console.log('success'))
    .catch(err => console.log(err));
};

createData().catch(err => console.log(err));
