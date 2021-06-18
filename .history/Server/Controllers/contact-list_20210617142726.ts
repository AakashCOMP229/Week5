import express, { Request, Response, NextFunction } from 'express';

import Contact from "../Models/contact-list";

// import Util Functions
import { UserDisplayName} from '../Util';

// Display Functions


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

//(R)ead in CRUD
export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.clothing.find()
    Clothing.find((err, clothingCollection) =>
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        
        res.render('index', { title: 'Clothing List', page: 'clothing-list', clothing: clothingCollection, displayName: UserDisplayName(req)   });
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