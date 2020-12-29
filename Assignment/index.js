const express = require('express');
const repo = require('./repository.js');
const { userInfo } = require('./fetchUser.js');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(` 
	<form method='POST'> 
	<button>Fetch User Information</button> 
	</form> 
`);
});

// Route to fetch particular user information using id
app.post('/', async (req, res) => {
  // Find user from (id:3f2006d22864b8af)
  const user1 = await repo.findOneBy({
    name: 'Test2Test',
    email: 'test2.test@gmail.com',
  });

  const user2 = await repo.findOneBy({
    email: 'test1.test@gmail.com',
  });

  const user3 = await repo.findOneBy({
    id: '3f2006d22864b8af',
  });

  const user4 = await repo.findOneBy({
    // The id and email are not belongs to same user in such cases no records are found
    id: '3f2006d22864b8af',
    email: 'test1.test@gmail.com',
  });

  res.send(userInfo([user1, user2, user3, user4]));
});

// Server setup
app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
