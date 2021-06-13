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

export function DisplayHomePage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Home', page: 'home' });
}