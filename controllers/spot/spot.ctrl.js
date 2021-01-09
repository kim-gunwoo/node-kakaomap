const models = require("../../models");

exports.insert_spot = (req, res) => {
  console.log(req.body);

  req.body.geo = {
    type: "Point",
    coordinates: [req.body.geo.split(",")[0], req.body.geo.split(",")[1]],
  };

  models.Spots.create(req.body);

  res.redirect("/");
};

exports.find_spot_all = (req, res) => {
  models.Spots.findAll({}).then((spots) => res.json(spots));
};

exports.delete_spot = (req, res) => {
  models.Spots.destroy({ where: { id: req.params.id } }).then(
    res.redirect("/")
  );
};
