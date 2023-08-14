const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const ProposalRouter = require('./routes/Proposal')
app.use(cors({
  origin: "*"
}))
app.use(express.json());

app.use('/', ProposalRouter)

const mongo = "mongodb://localhost:27017/Event_Proposal_Project"
mongoose.connect(mongo).then(() => {
  app.listen(PORT, () => {
    console.log(`MongoDB is connected Successfully`)
    console.log(`Server running Successfully On ${PORT}`);
  });
}).catch((error) => {
  console.log(error);
})
