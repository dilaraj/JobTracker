import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());

server.get('/connection', (req, res) => {
    res.send('Connected!!!!!')
})

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
})