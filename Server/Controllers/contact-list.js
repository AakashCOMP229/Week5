"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessUpdatePage = exports.DisplayUpdatePage = exports.DisplayContactListPage = void 0;
const contact_list_1 = __importDefault(require("../Models/contact-list"));
const Util_1 = require("../Util");
function DisplayContactListPage(req, res, next) {
    contact_list_1.default.find({}, null, { sort: { contactName: 1 } }, function (err, contactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Contact List', page: 'contact-list', contact_list: contactCollection, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
function DisplayUpdatePage(req, res, next) {
    let id = req.params.id;
    contact_list_1.default.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Update', page: 'update', contact: contactItemToEdit, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayUpdatePage = DisplayUpdatePage;
function ProcessUpdatePage(req, res, next) {
    let id = req.params.id;
    let updatedContactItem = new contact_list_1.default({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "contactEmail": req.body.contactEmail
    });
    contact_list_1.default.updateOne({ _id: id }, updatedContactItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessUpdatePage = ProcessUpdatePage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contact_list_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contact-list.js.map