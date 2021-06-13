import express, { Request, Response, NextFunction } from 'express';

export function DisplayHomePage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Home', page: 'home' });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'About Us', page: 'about' });
}

export function DisplayProjectPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Our Projects', page: 'projects' });
}

export function DisplayServicePage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Our Services', page: 'services' });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Our Services', page: 'services' });
}