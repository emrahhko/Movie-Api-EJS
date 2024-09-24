import {v4 as Id} from 'uuid';

import Movie from "../models/movie.js";


const movieControllers = {
    getAll: (req, res) => {
        const movies = Movie.getAll();
        res.status(200).render('movies', {movies})
    },
    getById: (req, res) => {
        const { id } = req.params;
        const movie = Movie.getById(id);
        if(movie) {
            res.status(200).render('movie', { movie });
        } else {
            res.status(404).render('404', 
                { title : 'Movie not found', 
                  message: 'The movie you looking for does not exist' });
        }
    },
    addMovieForm: (req, res) => {
        res.status(200).render('add-movie');
    },
    add: (req, res) => {
        const {title, poster, director, year} = req.body;
        if(title && poster && director && year) {
            Movie.add({id: Id(), title, poster, director, year})
            res.status(201).redirect('/api/get')
        } else {
            res.status(400).render('404', {
                title: 'Invalid input',
                message: 'Please fill all details'
            })
        }
    },
    update: (req, res) => {},
    remove: (req, res) => {},
};

export default movieControllers;