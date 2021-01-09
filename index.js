require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT;

const sequelize = require("./models").sequelize;

// then 부분 수정해야함
sequelize
  .sync()
  //.sync({ force: true })
  .then(() => {
    console.log("db connection success");
  })
  .catch((err) => {
    console.error(err);
    process.exit();
  });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
