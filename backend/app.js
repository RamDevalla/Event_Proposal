const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
app.use(express.json());


const mongo = "mongodb://localhost:27017/Event_Proposal_Project"
mongoose.connect(mongo).then(() => {
  app.listen(PORT, () => {
    console.log(`MongoDB is connected Successfully`)
    console.log(`Server running Successfully On ${PORT}`);
  });
}).catch((error) => {
  console.log(error);
})
