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
import { DisplayLoginPage, DisplayContactListPage, DisplayUpdatePage} from "../Controllers/contact-list";

/* GET /clothing-list page. */
router.get('/', DisplayContactListPage);

// //admin/update
router.get('/admin', DisplayUpdatePage);

/* POST - process /contact-list/edit/:id page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* GET - process /contact-list/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);