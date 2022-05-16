import { Client } from 'pg'


export default async function getComments(){
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
    }
    });
    
  client.connect();
  return client.query('SELECT name,rating,message FROM FeedBack;');
}