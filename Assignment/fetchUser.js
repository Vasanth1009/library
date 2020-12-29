const displayInfo = (users) => {
  const info = users
    .map((user) => {
      return ` 
		<td> 
		<table> 
			<tr> 
			<td><p><strong>ID : 
				</strong>${user.id}</p></td> 
			</tr> 
			<tr> 
			<td><p><strong>Email : 
				</strong>${user.email}</p></td> 
			</tr> 
			<tr> 
			<td><p><strong>Name : 
				</strong>${user.name}</p></td> 
			</tr> 
			<tr> 
			<td><p><strong>Password : 
				</strong>${user.password}</p></td> 
			</tr> 
		</table> 
		</td> 
	`;
    })
    .join('');
  return info;
};
module.exports = {
  // Function to displays user infomation
  userInfo(users) {
    return ` 
		<html> 
		<head> 
			<link rel ='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.min.css'> 
		</head> 
		<body> 
			<div class='container'> 
			<table class='table'> 
				<thead> 
				<tr> 
					<th>User1</th> 
					<th>User2</th> 
					<th>User3</th> 
					<th>User4</th> 
				</tr> 
					
				</thead> 
				<tbody> 
				<tr> 
					${displayInfo(users)} 
				</tr> 
				</tbody> 
			</table> 
			</div> 
		</body> 
		</html> 
	`;
  },
};