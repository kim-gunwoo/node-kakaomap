const express = require("express");
const app = require("../app");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html", {
    param1: "테스트",
    param2: 5,
    param3: {
      agr1: "test data",
      agr2: "test data tt",
    },
    param4: JSON.stringify({
      agr1: "test data stringify ",
      agr2: "test data tt  tt",
    }),
  });
});

router.use("/spot", require("./spot"));

module.exports = router;
