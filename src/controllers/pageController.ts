import { Request, Response } from 'express';

export const homePage = (req: Request, res: Response) => {
  res.send('home');
  //res.render('pages/page');
};

export const dogsPage = (req: Request, res: Response) => {
  res.send('dogs');
  //res.render('pages/page');
};

export const catsPage = (req: Request, res: Response) => {
  res.send('cats');
  //res.render('pages/page');
};

export const fishPage = (req: Request, res: Response) => {
  res.send('fish');
  //res.render('pages/page');
};
