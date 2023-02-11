const { Web } = require("./src/App");
const { Servidor } = require("./src/WebSockets");
require("dotenv").config();

App = new Web(process.env.PORT);

new Servidor(App.listen());
