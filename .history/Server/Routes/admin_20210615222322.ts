/*
   File name: admin.ts
   Created By: Aakash
    Student ID: 301134994
*/

import express from 'express';
const router = express.Router();
export default router;

//create admin controller - /admin
import { DisplayLoginPage, DisplayContactListPage, DisplayUpdatePage} from "../Controllers/admin";

//display- /admin/login
 router.get('/admin', DisplayLoginPage);
// ///admin/contact-lst
 router.get('/admin', DisplayContactListPage);
// //admin/update
 router.get('/admin', DisplayUpdatePage);