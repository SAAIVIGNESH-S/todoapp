const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes/routes");
app.use("/", router);

mongoose
  .connect(
    "mongodb+srv://SSV:osAwd8kzUHrjLIb1@test.imoijye.mongodb.net/todo?retryWrites=true&w=majority"
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