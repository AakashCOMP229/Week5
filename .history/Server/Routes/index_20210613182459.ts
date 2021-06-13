/*
   File name: index.ejs
   Created By: Aakash
    Student ID: 301134994
*/

import express from 'express';
const router = express.Router();
export default router;

//create index controller
import { DisplayHomePage } from "../Controllers/index";

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home'  });
});

/* GET about page. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About Us', page: 'about'  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Our Projects', page: 'projects'  });
});

/* GET services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Our Services', page: 'services'  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Us', page: 'contact'  });
});
//module.exports = router;
