import express, { Express } from 'express';
import dotenv from "dotenv";
dotenv.config();
import morgan from 'morgan';

export = (app: Express) => {
    app.use(morgan("dev"));
    app.use(express.json());
};