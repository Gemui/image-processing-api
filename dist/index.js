"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var images_1 = __importDefault(require("./routes/api/images"));
var express_1 = __importDefault(require("express"));
var apicache_1 = __importDefault(require("apicache"));
var cache = apicache_1.default.middleware;
var app = (0, express_1.default)();
app.use(cache('5 minutes'));
app.use('/api/images', images_1.default);
app.listen(3000, function () {
    console.log("logging into: http://localhost:3000");
});
exports.default = app;
