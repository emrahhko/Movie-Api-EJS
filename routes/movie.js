import express from 'express';
import movieControllers from '../controllers/movie.js';

const router = express.Router();

const {getAll, getById, add, update, remove, addMovieForm} = movieControllers

router.get('/get', getAll);
router.get('/get/:id', getById);
router.get('/add', addMovieForm)
router.post('/add', add);
router.put('/update/:id', update);
router.delete('/delete:id', remove);

export default router;