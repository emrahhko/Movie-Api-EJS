import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import dotenv from 'dotenv';

import createLog from './middleware/createLog.js';

import movieRoutes from './routes/movie.js';

// load environment variables
dotenv.config();
const PORT = process.env.PORT || 3000;

// construct path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// initialize express
const app = express();

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

// parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

//serve static files
app.use(express.static(path.join(PATH, 'public')));

// middleware
app.use(createLog);

// routes
app.use('/api', movieRoutes);

// handle 404
app.use('*', (req, res) => {
    res.status(404).render('404', {
        title : '404 Page',
        message : 'Page not found'
    });
});

// handle error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).rend('500', {
        title: '500 Page',
        message: 'Internal server error'
    });
});

// listen to port
app.listen(PORT, ()=> {
    console.log(`server is running on port: http://localhost:${PORT}`);
});