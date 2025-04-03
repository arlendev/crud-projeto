const express = require('express');
const cors = require('cors');
const pessoasRoutes = require('./routes/pessoas');

const app = express();

// Libera CORS apenas para seu domínio
app.use(cors({
  origin: 'https://physiosuivi.xyz'
}));

app.use(express.json());

app.use('/pessoas', pessoasRoutes);

app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor rodando em http://0.0.0.0:3000');
});
