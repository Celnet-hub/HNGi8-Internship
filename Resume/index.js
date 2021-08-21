const express = require("express");
const bodyParser = require('body-parser');

require("dotenv").config();

// Initialize application.
const app = express();

// Render static files
app.use(express.static("views"));

// Middleware 
app.use(bodyParser.json()); //utilizes the body-parser package
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.get("/", (req, res) => {
	res.render("index.html");
});

app.post("/contact-me", (req, res) => {
	Name = req.body.firstName;

	message = `<h3>Thank you ${Name} for reaching Out. I will be in contact soon. <a href="/">Go back Home</a></h3>`;

	res.send(message);
});


// create server
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server has started on Port ${PORT}`))