import express from 'express';
import cors from 'cors';
import fundingRoutes from './fundingRates.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api', fundingRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
