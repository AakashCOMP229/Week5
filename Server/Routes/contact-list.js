"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const index_1 = require("../Util/index");
const contact_list_1 = require("../Controllers/contact-list");
router.get('/', contact_list_1.DisplayContactListPage);
router.get('/update/:id', index_1.AuthGuard, contact_list_1.DisplayUpdatePage);
router.post('/update/:id', index_1.AuthGuard, contact_list_1.ProcessUpdatePage);
router.get('/delete/:id', index_1.AuthGuard, contact_list_1.ProcessDeletePage);
//# sourceMappingURL=contact-list.js.map