
import { Client } from 'pg'

export default function handler(req, res) {
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
    }
    });
    
    client.connect();
    
    const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
    const values = ['brianc', 'brian.m.carlson@gmail.com']
    
    // async/await
    try {
      const res = await client.query(text, values)
      console.log(res.rows[0])
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    } catch (err) {
      console.log(err.stack)
    }
    
    console.log(req.body)
    res.status(200).json({ name: 'John Doe' })
}
