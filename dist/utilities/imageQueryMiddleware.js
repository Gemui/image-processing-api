"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imageQueryMiddleware = function (req, res, next) {
    if (req.query.width && req.query.height) {
        var width = Number(req.query.width);
        var height = Number(req.query.height);
        if (isNaN(width) || width < 1 || isNaN(height) || height < 1) {
            res.send('Invalid input for height or width e.g. height=a, height=0 or height=-1.');
            return;
        }
    }
    if (req.query.rotate) {
        var rotate = Number(req.query.rotate);
        if (isNaN(rotate) || rotate < 0) {
            res.send('Invalid input for rotate e.g. rotate=a, rotate=0 or rotate=-1.');
            return;
        }
    }
    next();
};
exports.default = imageQueryMiddleware;
