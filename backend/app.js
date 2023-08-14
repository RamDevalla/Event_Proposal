const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 4000;


const ProposalRouter = require('./routes/Proposal')
const userRouter = require("./routes/user_route");
const VendorRouter = require("./routes/vendor_route");

app.use(cors({
  origin: "*"
}))
app.use(express.json());

//Routes
app.use('/', ProposalRouter)
app.use('/user', userRouter)
<<<<<<< HEAD
app.use('/', VendorRouter)
app.get('/allProposals', userAuth, allProposals)
=======
app.use('/vendor', VendorRouter)

>>>>>>> 265424319007b013fdad4d296801ae2df6437ed0


const mongo = "mongodb+srv://ramdevalla777:xQIZ482FqhS0v1dH@cluster0.h0gxwmc.mongodb.net/Project_142023"
mongoose.connect(mongo).then(() => {
  app.listen(PORT, () => {
    console.log(`MongoDB is connected Successfully`)
    console.log(`Server running Successfully On ${PORT}`);
  });
}).catch((error) => {
  console.log(error);
})
