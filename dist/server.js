"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorhandler_1 = require("errorhandler");
const app_1 = require("./app");
app_1.default.use(errorhandler_1.default());
const server = app_1.default.listen(app_1.default.get("port"), () => {
    console.log("  App is running at http://localhost:%d in %s mode", app_1.default.get("port"), app_1.default.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
exports.default = server;
