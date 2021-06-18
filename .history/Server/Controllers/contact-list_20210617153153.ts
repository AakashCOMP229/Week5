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

export function DisplayUpdatePage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Update', page: 'update' });
}

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Contact Item
    let updatedClothingItem = new Contact
    ({
      "_id": id,
      "name": req.body.name,
      "brand": req.body.brand,
      "category": req.body.category,
      "colour": req.body.colour,
      "size": req.body.size,
      "price": req.body.price
    });
  
    // find the clothing item via db.clothing.update({"_id":id}) and then update
    Clothing.updateOne({_id: id}, updatedClothingItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/clothing-list');
    });
}

// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.clothing.remove({"_id: id"})
  Contact.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
}