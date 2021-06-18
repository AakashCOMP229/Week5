import express, { Request, Response, NextFunction } from 'express';

// create an instance of the User Model
import User from '../Models/user';

import passport from 'passport';

// import Util functions
import { UserDisplayName } from '../Util';

// Display Functions

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'About Us', page: 'about', displayName: UserDisplayName(req)   });
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: UserDisplayName(req)   });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services', displayName: UserDisplayName(req)   });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: UserDisplayName(req)   });
}


//Assignment 2

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        console.log("Not Authorize");
        return res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });        
    }

    return res.redirect('/contact-list');
}

export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
{

    // User.findOne({ username: req.body.username }, function (err: Error, user:any) {
    //   // if there is an error
    //    if(err)
    //      {
    //          console.error(err);
    //          return next(err);
    //      }
    //   // if user doesn't exist
    //   if(!user)
    //      {
    //          req.flash('loginMessage', 'Authentication Error');
    //          return res.redirect('/login');
    //     }
    //   // if the password isn't correct
    //     if (!user.verifyPassword(req.body.password))
    //     {
            
    //             req.flash('loginMessage', 'Invalid Password');
            
    //     }
    //   // if the user is properly authenticated
    //    return res.redirect('/contact-list');
    // });




    
    ////////////////////////////
    passport.authenticate('local', (err, user, info) => {
        // are there server errors?
        if (err) {
            console.error(err);
            return next(err);
        }
        // are there login errors?
        if (!user) {
            let usr = new User({ username: 'bob99', emailAddress: 'bob99@example.com', password: 'secret' });
            usr.save(function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("user:  saved.");
                }
            });
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
       
        req.login(user, (err) =>
        // are there db errors?
        {
            if (err) {
                console.error(err);
                return next(err);
            }
           
            return res.redirect('/contact-list')
        });
    })(req, res, next);
}

export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction): void
{
    req.logout();

    res.redirect('/login');
}