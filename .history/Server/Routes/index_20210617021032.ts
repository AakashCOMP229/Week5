/*
   File name: index.ts
   Created By: Aakash
    Student ID: 301134994
*/

import express from 'express';
const router = express.Router();
export default router;

//create index controller
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayServicesPage, ProcessLoginPage, ProcessLogoutPage } from "../Controllers/index";

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);
//module.exports = router;

//Assignment 2:

/* GET - display login page - with /login . */
router.get('/login', DisplayLoginPage);

/* POST - process login page when user clicks Login Button */
router.post('/login', ProcessLoginPage);

/* GET - process the logout page - with /logout . */
router.get('/logout', ProcessLogoutPage);