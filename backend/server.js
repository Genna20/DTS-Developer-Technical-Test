const express = require('express'); 
const cors  = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT  = 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/tasks', taskRoutes);

//Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));