const express = require('express')
const { PORT } = require('./config')
const { ClientController } = require("./app/controllers/client.controller")
const { useExpressServer } = require('routing-controllers')

const server = express()

useExpressServer(server, {
    controllers: [ClientController],
  });

server.listen(PORT, () => console.log(`Listening on ${PORT}!`));
