const express = require('express');

//create the express application, a project can use multiple express applications 	

const app = express();

app.get('/', (req, res) => {
	res.send({hello:'there' })
});

app.listen(3000);