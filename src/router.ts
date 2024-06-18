import { Router } from 'express';

const router = Router();

//
// --- EXPANSES ---
//

router.get('/expanses', (req, res) => {
  res.json({
    message: 'elo',
  });
});

router.get('/expanses/:id', (req, res) => {
  res.json({
    message: 'elo',
  });
});

router.post('/expanses', (req, res) => {
  res.json({
    message: 'elo',
  });
});

router.delete('/expanses/:id', (req, res) => {
  res.json({
    message: 'elo',
  });
});

//
// --- INCOME ---
//

router.get('/income', (req, res) => {
  res.json({
    message: 'elo',
  });
});

router.get('/income/:id', (req, res) => {
  res.json({
    message: 'elo',
  });
});

router.post('/income', (req, res) => {
  res.json({
    message: 'elo',
  });
});

router.delete('/income/:id', (req, res) => {
  res.json({
    message: 'elo',
  });
});

export default router;
