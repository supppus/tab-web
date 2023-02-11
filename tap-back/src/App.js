const Express = require("express");
const cors = require("cors");
class App {
  constructor(PORT) {
    this.PORT = PORT;
    this.App = Express();
    this.App.use(cors({ origin: true }));
  }
  thisApp() {
    return this.App;
  }
  listen() {
    return this.App.listen(this.PORT, () => {
      console.log("Api Started..");
    });
  }
}
exports.Web = App;
