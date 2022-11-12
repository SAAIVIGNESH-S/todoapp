const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes/routes");
app.use("/", router);

mongoose
  .connect(
    process.env.MONGODB_URL
  )
  .then((result) => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT);
    console.log("db connected");
    console.log(PORT);
  })
  .catch((error) => {
    console.log(error);
  });