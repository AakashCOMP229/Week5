/*
   File name: admin.ts
   Created By: Aakash
    Student ID: 301134994
*/

import express from 'express';
const router = express.Router();
export default router;
 
// import Util functions
import { AuthGuard } from '../Util/index';


//create admin controller - /admin
import { DisplayLoginPage, DisplayContactListPage, DisplayUpdatePage, ProcessDeletePage} from "../Controllers/contact-list";

/* GET /contact-list page. */
router.get('/update/:id', AuthGuard,  DisplayContactListPage);

// //admin/update
router.get('/admin', DisplayUpdatePage);

/* POST - process /contact-list/update/:id page */
router.post('/update/:id', AuthGuard, ProcessUpdatePage);

/* GET - process /contact-list/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);