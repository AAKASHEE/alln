// keepMongoAlive.js
process.env.PATH = process.env.PATH + ':/Users/aakashe/.nvm/versions/node/v22.16.0/bin';


const mongoose = require('mongoose');
require('dotenv').config();

if (!process.env.MONGODB_URI) {
  console.error("❌ Missing MONGODB_URI. Check your .env file!");
  process.exit(1);
}
const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log("✅ Ping: Connected to MongoDB");

    await mongoose.connection.db.collection('your-collection-name').findOne({});

    console.log("✅ Ping: Query completed. MongoDB is now warm.");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("❌ Ping: Connection failed:", err.message);
  });
