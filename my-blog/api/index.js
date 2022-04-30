const express = require("express");
const app = express();
const env = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require('multer');

env.config();
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

  const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
      cb(null, 'images');
    }, filename:(req, file, cb)=>{
      cb(null, req.body.name)
    }
  })

  const upload = multer({storage:storage});
  app.post("/api/upload", upload.single('file'), (req, res)=>{
    res.status(200).json("File has been uploaded");
  })

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/post', postRoute)
app.use('/api/category', categoryRoute)

app.listen("5000", () => {
  console.log("Running on port 5000");
});
