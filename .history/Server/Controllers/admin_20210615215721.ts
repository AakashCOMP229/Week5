import express, { Request, Response, NextFunction } from 'express';

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index/admin', { title: 'Login', page: 'login' });
}

export function DisplayContactListPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index/admin', { title: 'Buisness Contact List', page: 'contactlist' });
}

export function DisplayUpdatePage(req: Request, res: Response, next: NextFunction)
{
    res.render('index/admin', { title: 'Update', page: 'update' });
}