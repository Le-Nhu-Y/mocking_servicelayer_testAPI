"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_router_1 = __importDefault(require("./src/router/user.router"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const DB_URL = 'mongodb://127.0.0.1:27017/test1';
mongoose_1.default.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));
app.use('/api/v1', user_router_1.default);
app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});
//# sourceMappingURL=index.js.map