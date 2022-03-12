"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imageMiddleware = function (req, res, next) {
    if (req.query.filename) {
        next();
        return;
    }
    res.send('File name is required');
};
exports.default = imageMiddleware;
