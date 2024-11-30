require("dotenv").config();
const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose");

//create a server
const app = express();
app.use(express.json());
app.use(cors());

console.log(process.env.MONGODB_URI);
const PORT = process.env.PORT || 3000;

// connect to db
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Db connected!"))
    .catch((error) => console.log("Failed to connect", error));

app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
    });
    
    //from ishar
//     app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//     mongoose.connect(process.env.MONGODB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
       
//     }).then(() => {
//         console.log("MongoDB connected");
//     }).catch((err) => {
//         console.log(err);
//     });
// });