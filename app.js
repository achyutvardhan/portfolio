const express = require("express");
const app = express();
const path = require("path");
const con = require("./database/mysql");
if (con.getConnection) {
  console.log("connected!");
}
app.use(express.static(path.join(__dirname, "pages")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", require("./routes/api/contact"));a

app.listen(8080, () => {
  console.log("listening to port 8080...");
});
