import express from 'express';
import airoute from './routes/ai.route.js'
import cors from 'cors'



const app = express();
app.use(cors())
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('hello gaurav');
// });


app.use('/ai', airoute);

export default app;
