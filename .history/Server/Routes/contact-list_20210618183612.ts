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
import { DisplayContactListPage, DisplayUpdatePage, ProcessDeletePage, ProcessUpdatePage} from "../Controllers/contact-list";

/* GET /contact-list page. */
router.get('/',  DisplayContactListPage);

// //admin/update
router.get('/update/:id', AuthGuard,  DisplayUpdatePage);

/* POST - process /contact-list/update/:id page */
router.post('/update/:id', AuthGuard,  ProcessUpdatePage);

/* GET - process /contact-list/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);