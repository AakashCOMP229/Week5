/*
   File name: index.ejs
   Created By: Aakash
    Student ID: 301134994
*/

import express from 'express';
const router = express.Router();
export default router;

//create index controller
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectPage, DisplayServicePage } from "../Controllers/index";

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectPage);

/* GET services page. */
router.get('/services', DisplayServicePage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);
//module.exports = router;
