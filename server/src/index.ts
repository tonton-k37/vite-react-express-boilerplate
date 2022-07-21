import fs from 'fs';
import path from 'path';
import vite from 'vite';
import express, { Request, Response, NextFunction } from 'express';
import { callbackify } from 'util';

const PORT = 3002;
const app = express();

const requestHandler = () => {
  console.log(`start listening on port ${PORT}`);
};

app.get('/api/v1', (req: Request, res: Response) => {
  res.send('unkooo');
});

app.listen(PORT, requestHandler);
