/* eslint-disable @typescript-eslint/no-var-requires */
import express from "express";
import helmet from "helmet";
import cors from "cors";

// const express = require("express");
const app = express();
// const helmet = require("helmet");
// const cors = require("cors");

app.use(helmet());

// : Cors
app.use(
  cors({
    origin(origin, callback) {
      return callback(null, true);
    },
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
// app.use(cors());

app.use("/api", require("./routes/products").default);
app.listen(process.env.PORT);
module.exports = {
  path: "/api",
  handler: app,
};
