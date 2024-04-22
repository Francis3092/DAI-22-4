import config from './src/configs/db-config.js';
import pkg from 'pg'
import ProvinceRepository from './src/repositories/province-repository.js';

import express from "express";
import cors from "cors"; 


const { Client }  = pkg;
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const client = new Client(config);
await client.connect();

let sql = `SELECT * from provinces`;
let result = await client.query(sql);
await client.end();
console.log(result.rows);

app.get('/provinces', (req, res) => {
    res.send(ProvinceRepository.getAllAsync());
})



// application.get("/")[
//     reposads.getAllScy()
//     hskksdjfds
// ]