"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compression_1 = require("compression");
const express_session_1 = require("express-session");
const body_parser_1 = require("body-parser");
const lusca_1 = require("lusca");
const dotenv_1 = require("dotenv");
const express_flash_1 = require("express-flash");
const path_1 = require("path");
const secrets_1 = require("./util/secrets");
dotenv_1.default.config({ path: ".env.tofutexts" });
const homeController = require("./controllers/home");
const app = express_1.default();
app.set("port", process.env.PORT || 3000);
app.set("views", path_1.default.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_session_1.default({
    resave: true,
    saveUninitialized: true,
    secret: secrets_1.SESSION_SECRET,
}));
app.use(express_flash_1.default());
app.use(lusca_1.default.xframe("SAMEORIGIN"));
app.use(lusca_1.default.xssProtection(true));
app.use(express_1.default.static(path_1.default.join(__dirname, "public"), { maxAge: 31557600000 }));
app.get("/", homeController.index);
exports.default = app;
