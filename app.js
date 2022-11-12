const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes/routes");
app.use("/", router);

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connected..");
  }
);

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is rocking..");
});
