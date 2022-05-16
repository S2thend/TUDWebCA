import { Client } from 'pg'


export default async function getComments(){
    const client = new Client({
      connectionString: "postgres://kkdlvzcdqkydli:d886d4b275fdc63d9b60683016619b732e48104af54448e18da258da3fd56550@ec2-34-246-227-219.eu-west-1.compute.amazonaws.com:5432/ddt9k05bme6ecn",
      ssl: {
        rejectUnauthorized: false
    }
    });
    
  client.connect();
  return client.query('SELECT name,rating,message FROM FeedBack;');
}