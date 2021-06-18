import express, { Request, Response, NextFunction } from 'express';

import Contact from "../Models/contact-list";

// import Util Functions
import { UserDisplayName} from '../Util';

// Display Functions

//(R)ead in CRUD
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.contact.find()
    Contact.find((err, contactCollection) =>
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        
        res.render('index', { title: 'Contact List', page: 'contact-list', contact: contactCollection, displayName: UserDisplayName(req) });
    });
}


// export function DisplayContactListPage(req: Request, res: Response, next: NextFunction)
// {
//     res.render('index', { title: 'Buisness Contact List', page: 'contact-list' });
// }

export function DisplayUpdatePage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Update', page: 'update' });
}