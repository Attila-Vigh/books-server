import express from 'express';
import cors from 'cors';
import listEndpoints from 'express-list-endpoints';
import services from './services/index.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/', services);

console.table(listEndpoints(app));

app.listen(PORT, () => console.log(`Server is running on port ${ PORT }`));
app.on('error', (err) => console.error(err));