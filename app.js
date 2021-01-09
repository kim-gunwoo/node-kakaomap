const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.engine("html", ejs.renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  // 지도 API 키
  app.locals.map_api = {
    KAKAO_JAVASCRIPT_KEY: process.env.KAKAO_JAVASCRIPT_KEY,
    default: {
      lat: process.env.DEFAULT_LATITUDE,
      lng: process.env.DEFAULT_LONGITUDE,
    },
  };

  next();
});

app.use(require("./controllers"));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).json("page not found");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  res.json({ error: err.message || "internal server error" });
});

module.exports = app;
