import app from './app'
import './database'
import dotenv from 'dotenv';

import {createRoles} from './libs/initialSetup'
dotenv.config();

const port = process.env.PORT || 3000;
const runRoles = process.env.INI_Roles || false;
if (runRoles) {
    createRoles();
}

app.listen(port)
console.log('Server listen on port', port)
