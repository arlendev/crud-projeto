#!/bin/sh
echo "Aguardando MySQL iniciar..."
until nc -z -v -w30 mysql 3306
do
  echo "Aguardando banco de dados..."
  sleep 5
done

echo "MySQL está disponível, iniciando backend!"
node server.js
