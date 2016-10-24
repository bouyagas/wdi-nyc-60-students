const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

// do your db stuff here
const dbConnection = 'mongodb://localhost:27017/cruisemovies';

function searchMovies(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);

    db.collection('movies')
      .find(res.filteredQueryParams)
      .sort({ Year: -1, Title: 1 })
      .toArray((arrayError, data) => {
        if (arrayError) return next(arrayError);

        // return the data
        res.filteredMovies = data;
        db.close();
        return next();
      });
    return false;
  });
  return false;
}


// function saveFavoriteMovie(req, res, next) {}

// function getFavorite(req, res, next) {}

// function deleteFavoriteMovie(req, res, next) {}

module.exports = {
  searchMovies,
  // saveFavoriteMovie,
  // getFavorite,
  // deleteFavoriteMovie,
};
