import express, { Request, Response, NextFunction } from 'express';

import Contact from "../Models/contact-list";

// import Util Functions
import { UserDisplayName} from '../Util';

// Display Functions

//(R)ead in CRUD
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.contact.find()
    Contact.find({}, null, {sort: {contactName: 1}},function(err,contactCollection)
     {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        
        res.render('index', { title: 'Contact List', page: 'contact-list', contact_list: contactCollection, displayName: UserDisplayName(req) });
    });
}

export function DisplayUpdatePage(req: Request, res: Response, next: NextFunction)
{
    let id = req.params.id;

    // pass the id to the db

    // db.contact.find({"_id": id})

    Contact.findById(id, {}, {}, (err, contactItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);  
        }

        // show the edit view
        res.render('index', { title: 'Update', page: 'update', contact: contactItemToEdit, displayName: UserDisplayName(req)});
    });
}

// Process (E)dit page
export function ProcessUpdatePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Contact Item
    let updatedContactItem = new Contact
    ({
      "_id": id,
      "contactName": req.body.contactName,
      "contactNumber": req.body.contactNumber,
      "contactEmail": req.body.contactEmail
    });
  
    // find the contact item via db.contact.update({"_id":id}) and then update
    Contact.updateOne({_id: id}, updatedContactItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/contact-list');
    });
}

// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.contact.remove({"_id: id"})
  Contact.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
}