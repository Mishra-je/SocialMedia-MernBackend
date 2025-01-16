// const express = require('express');
// const app = express();
// const cors = require('cors');
// const db = require("./Database/Db")
// const UploadRoutes = require('./Routes/UploadRoutes');

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cors());


// app.use('/user',UploadRoutes)

// app.get('/', (req,res) => {
//     res.send('Hello World');
// })

// app.listen(3000,() => {
//     console.log('Server is running on port 3000');
// })

const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path'); 
const db = require("./Database/Db");
const UploadRoutes = require('./Routes/UploadRoutes');
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use('/user', UploadRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server
app.listen(port, () => {
    console.log('Server is running on port 3000');
});
