const mongoose = require('mongoose');
require('dotenv').config(); 
const Database = process.env.DATABASE;

mongoose.connect(Database, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB server");
});

db.on('disconnected', () => {
    console.log("MongoDB disconnected!");
});

db.on('error', (error) => {
    console.error("Database connection error:", error);
});

module.exports = db;
