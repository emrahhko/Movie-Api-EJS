import findMovie from "../utils/findMovie.js";

let movies = [
    {
        id: '1',
        poster:'https://fr.web.img4.acsta.net/pictures/15/07/29/17/08/261485.jpg',
        name: 'Sicario',
        director: 'Denis Villeneuve',
        genre: 'Thriller',
        year: 2015
    },
    {
        id: '2',
        poster:'https://m.media-amazon.com/images/M/MV5BMTUwOGFiM2QtOWMxYS00MjU2LThmZDMtZDM2MWMzNzllNjdhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
        name: 'In Bruges',
        director: ' Martin McDonagh',
        genre: 'Comedy drama',
        year: 2008
    },
    {
        id: '3',
        poster:'https://www.originalfilmart.com/cdn/shop/products/the_.game_1997_original_film_art_5000x.jpg?v=1624940524',
        name: 'The Game',
        director: 'David Fincher',
        genre: 'Thriller',
        year: 1997
    },
    {
        id: '4',
        poster:'https://upload.wikimedia.org/wikipedia/en/6/67/RoundersPoster.jpg',
        name: 'Rounders',
        director: 'John Dahl',
        genre: 'Thriller',
        year: 1998
    },
];



class Movie {
    static getAll = () => {
        return movies;
    };

    static getById = (id) => {
        return findMovie(movies, id);
    };

    static add = (movie) => {
        movies.push(movie);
        return movies;
    };

    static update = (id, movie) => {
        const movieExist = findMovie(movies, id);
        if(movieExist) {
            movieExist.title = movie.title;
            movieExist.director = movie.director;
            movieExist.year = movie.year;
            movieExist.poster = movie.poster;
            return movieExist;
        } else {
            return null;
        };    
    };
    
    static delete = (id) => {
        const movieExist = findMovie(movies, id);
        if (movieExist) {
            movies = movies.filter((movie) => movie.id !== id);
            return movies;
        } else {
            return null;
        }
    };
};

export default Movie;