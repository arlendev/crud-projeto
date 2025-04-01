const express = require('express');
const cors = require('cors');
const pessoasRoutes = require('./routes/pessoas');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/pessoas', pessoasRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
