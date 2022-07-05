import axios from 'axios';
import express from 'express';

const router = express.Router();

router.get('/funding_rates', (req, resp) => {
  try {
    axios.get('https://ftx.com/api/funding_rates').then((res) => {
      resp.status(200).json(res.data.result);
    });
  } catch (error) {
    resp.status(400).json(message);
  }
});

export default router;
