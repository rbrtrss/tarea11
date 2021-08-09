/* eslint-disable import/extensions */
/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import routerProductos from './routes/productos_routes.js';

// Servidor
const PORT = 3000;
const app = express();

app.set('views', path.resolve(__dirname, '../views'));
app.set('view engine', 'ejs');

const server = app.listen(PORT, () => {
  console.log(`Levantado en el puerto ${PORT}`);
});

server.on('error', (err) => {
  console.error('Hubo un error:', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.use('/api/productos', routerProductos);
