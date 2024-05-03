import mongoose from 'mongoose'

import dotenv from 'dotenv';
dotenv.config();

const urlDB = process.env.URL_DB;

mongoose.connect(urlDB)
    .then(db => console.log('DB is connected'))
    .catch(error=>console.log(error))