const mongoose = require('mongoose');
require('dotenv').config(); 
const Database = process.env.DATABASE || "mongodb://127.0.0.1:27017/socialmedia";

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
