-- LEFT JOIN
-- We are calling the JOIN from our students table and telling it to JOIN our cohorts table
-- SELECT *
-- FROM students
-- LEFT JOIN cohorts
--   ON (students.cohort_id = cohorts.cohort_id);


-- SELECT statement happens last
-- Same as above, but formatted nicely
-- SELECT
--   students.name AS student_name,
--   cohorts.name AS cohort_name,
--   cohorts.class AS class
-- FROM students
-- LEFT JOIN cohorts
--  ON (students.cohort_id = cohorts.cohort_id);



-- These will ONLY give us the students who are assigned to a cohort
-- SELECT *
-- FROM students
-- INNER JOIN cohorts
--   ON (students.cohort_id = cohorts.cohort_id);

-- SELECT
--   students.name AS student_name,
--   cohorts.name AS cohort_name,
--   cohorts.class AS class
-- FROM students
-- INNER JOIN cohorts
--  ON (students.cohort_id = cohorts.cohort_id);

-- Select students ONLY from Melville cohort
SELECT
  students.name AS student,
  cohorts.name AS cohort
FROM students
INNER JOIN cohorts
  ON (students.cohort_id = cohorts.cohort_id)
WHERE cohorts.name = 'Melville';

