import config from '../../src/configs/db-config.js';
import pkg from 'pg'
const { Client }  = pkg;

export default class ProvinceRepository{
    getAllAsync = async () => {
        const client = new Client(config);
        await client.connect();

        let sql = `SELECT * from provinces`;
        let result = await client.query(sql);
        await client.end();
        console.log(result.rows);
    }

    getByIdAsync = async (id) => {
        const client = new Client(config);
        await client.connect();

        const sql = 'SELECT * from provinces WHERE id=$1';
        const values = [id];
        const result = await client.query(sql, values);
        await client.end();

        console.log('Resultados: length', result.rows.length);
        console.log('result.rows[0]', result.rows[0]);
    }

    createAsync = async (entity) => {
        const client = new Client(config);
        await client.connect();

        const sql = `INSERT INTO provinces (name, full_name, latitude, longitude, display_order) VALUES ($1, $2, $3, $4, $5)`;
        const values = ['Jujuy', 'Provincia de Jujuy', -23.319974, -65.764427, 3];
        const result = await client.query(sql, values);
        await client.end();

        console.log('rowCount: ', result.rowCount);
    }

    updateAsync = async (id, entity) => {

    }

    deleteByIdAsync = async (id) => {

    }
}

