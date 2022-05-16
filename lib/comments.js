import { Client } from 'pg'


export default async function getComments(){
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
    }
    });
    
  client.connect();
  client.query('SELECT name,rating,message FROM FeedBack;', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
        }
        client.end();
    });
}