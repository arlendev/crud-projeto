const express = require('express');
const router = express.Router();
const db = require('../db');

// GET todas as pessoas
router.get('/', (req, res) => {
  db.query('SELECT * FROM pessoas', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// GET uma pessoa
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM pessoas WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
});

// POST nova pessoa
router.post('/', (req, res) => {
  const { nome, sobrenome, nascimento } = req.body;
  db.query('INSERT INTO pessoas (nome, sobrenome, nascimento) VALUES (?, ?, ?)',
    [nome, sobrenome, nascimento],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(201);
    });
});

// PUT (editar pessoa)
router.put('/:id', (req, res) => {
  const { nome, sobrenome, nascimento } = req.body;
  db.query(
    'UPDATE pessoas SET nome = ?, sobrenome = ?, nascimento = ? WHERE id = ?',
    [nome, sobrenome, nascimento, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(200);
    }
  );
});

// DELETE pessoa
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM pessoas WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

module.exports = router;
