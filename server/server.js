
import express from "express";
import { Sequelize, DataTypes } from 'sequelize'
import validarConexion from "./database/connection.js";
import Usuario from "./model/users.js";
import router from './router/route.js'

// Creación del servidor Express
const app = express();
const port = 3000;

/** api routes */
app.use('/api', router)

// Ruta para obtener todos los usuarios
/*app.get('/users', async (req, res) => {
  try {
    const users = await Usuario.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});*/

// Iniciar el servidor
validarConexion().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})
