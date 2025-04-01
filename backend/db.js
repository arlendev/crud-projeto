const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: process.env.DB_HOST || 'mysql', // ✅ aqui é o nome do serviço no docker-compose
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'crud_pessoas'
});

conexao.connect(err => {
  if (err) {
    console.error('Erro ao conectar no banco:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

module.exports = conexao;
