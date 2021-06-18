"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ContactListSchema = new Schema({
    contactName: String,
    contactNumber: String,
    contactEmail: String
}, {
    collection: "contact_list"
});
const Model = mongoose_1.default.model("Contact", ContactListSchema);
exports.default = Model;
//# sourceMappingURL=contact-list.js.map