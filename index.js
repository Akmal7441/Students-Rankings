const express = require("express");
const { create } = require("express-handlebars");
const path = require("path");
const app = express();
require("./helper/db")();

const hbs = create({
  extname: "hbs",
  defaultLayout: "layout.hbs",
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true,
  },
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const HomeRoutes = require("./routes/home");

app.use("/", HomeRoutes);

const port = normalizePort(process.env.port || 3000);
const host = "localhost";

try {
  app.listen(port, host, () => {
    console.log(`Listening on port${host}:${port}`);
  });
} catch (error) {
  console.log(error);
}

function normalizePort(port) {
  const num = parseInt(port);
  if (isNaN(num)) {
    return port;
  } else if (num >= 0) {
    return num;
  }
  return false;
}
