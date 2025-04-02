const express = require('express');
const cors = require('cors');
const pessoasRoutes = require('./routes/pessoas');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/pessoas', pessoasRoutes);

app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor rodando em http://0.0.0.0:3000');
});
