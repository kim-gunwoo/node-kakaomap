const express = require("express");
const router = express.Router();
const ctrl = require("./spot.ctrl");

router.get("/select", (_, res) => {
  res.render("spot.html");
});

router.get("/find", ctrl.find_spot_all);

router.post("/save", ctrl.insert_spot);

router.get("/delete/:id", ctrl.delete_spot);

module.exports = router;
