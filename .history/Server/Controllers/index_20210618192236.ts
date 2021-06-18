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
    
    
    var bookId = req.params.id;

    //read the data part 
    User.findOne({ _id: bookId }, (err: Error, user: any) => {

        if (err) {
            console.error(err);
            console.log("--------------werwerwerwerwrwerw------------------");
        }

        //pass data to the template engine
        res.render('/contact-list', { displayName: req.body.username });
    });
    // passport.authenticate('local', (err, user, info) => {
    //     // are there server errors?
    //     if (err) {
    //         console.error(err);
    //         return res.redirect('/login');
    //     }
    //     // are there login errors?
    //     if (!user)  {
    //         let newUser = new User
    //             ({
    //                 username: req.body.username,
    //                 emailAddress: req.body.emailAddress,
    //                 displayName: req.body.username,
    //                 password: req.body.password
    //             });

    //         User.register(newUser, req.body.password, (err) => {
    //             if (err)
    //             {
    //                 console.error('Error: Inserting New User');
    //                 console.error(err);
    //                 if (err.name == "UserExistsError")
    //                 {
    //                     console.error('Error: User Already Exists');
    //                     req.flash('registerMessage', 'User Already Exists');
    //                     return res.redirect('/login');
    //                 }
    //                 req.flash('registerMessage', 'Registration Error');

    //                 return res.redirect('/login');
    //             }

    //             // after successful registration - login the user
    //             return passport.authenticate('local')(req, res, () => {
    //                 return res.redirect('/contact-list');
    //             });
    //         });
    //     }

    //     req.login(user, (err) =>
    //     // are there db errors?
    //     {
    //         if (err) {
    //             console.error(err);
    //             return next(err);
    //         }
           
    //         return res.redirect('/contact-list')
    //     });
    // })(req, res, next);
}

export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction): void
{
    req.logout();

    res.redirect('/login');
}