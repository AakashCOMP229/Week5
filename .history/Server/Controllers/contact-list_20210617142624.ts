import express, { Request, Response, NextFunction } from 'express';

import Contact from "../Models/contact-list";

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Login', page: 'login' });
    User.find(function (err, user) {
        if (err) {
            return console.log(err);
        }

        console.log(user);
    });
}

export function DisplayContactListPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Buisness Contact List', page: 'contact-list' });
}

export function DisplayUpdatePage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Update', page: 'update' });
}