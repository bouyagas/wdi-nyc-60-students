-- Use SQL queries to complete the following tasks

-- Select the title of all movies
-- SELECT title FROM movies;

-- Show all the distinct ratings in the database.
-- SELECT title, rating FROM movies;

-- Show all unrated movies.
-- SELECT title
-- FROM movies
-- WHERE rating IS NULL;

-- Select all movie theaters that are not currently showing a movie.
-- SELECT name
-- FROM movietheaters
-- WHERE movie IS NULL;

-- Select all data from all movie theaters and, additionally, the data from the movie that is being shown in the theater (if one is being shown).
-- SELECT * FROM
--   movietheaters
-- LEFT JOIN movies
--   ON (movies.code = movietheaters.movie);


-- Select all data from all movies and, if that movie is being shown in a theater, show the data from the theater.
-- SELECT * FROM
--   movies
-- INNER JOIN movietheaters
--   ON (movies.code = movietheaters.movie);

-- Show the titles of movies not currently being shown in any theaters.
-- SELECT title FROM
--   movies
-- LEFT JOIN movietheaters
--   ON (movies.code = movietheaters.movie)
-- WHERE movietheaters.code IS NULL;

-- Add the unrated movie "One, Two, Three".
-- INSERT INTO movies (code, title) VALUES (8, 'One, Two, Three');

-- Set the rating of all unrated movies to "G".
-- UPDATE movies SET rating='G' WHERE rating IS NULL;

-- Remove movie theaters projecting movies rated "NC-17".
DELETE
FROM movietheaters
  USING movies
WHERE (movietheaters.code = movies.code)
AND movies.rating = 'NC-17';
