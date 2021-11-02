const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const usinaRoute = require("./routes/usinaRoute");
const clientesRoute = require("./routes/clientesRoute");

app.use(express.json());
app.use(cors());
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("DB connection sucessful!");
});

app.use("/usina", usinaRoute);
app.use("/clientes", clientesRoute);

app.listen(process.env.PORT, () => {
  console.log("App is running in port 3001");
});
