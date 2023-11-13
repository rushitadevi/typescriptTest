"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4000;
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello, World!" });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
