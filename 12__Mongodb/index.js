// Para usar mongo:
// Instalar el servidor: https://www.mongodb.com/docs/mongodb-shell/crud/
// Instalar el shell: https://www.mongodb.com/docs/manual/reference/method/

// https://www.mongodb.com/docs/mongodb-shell/write-scripts/
db = connect('mongodb://localhost/ejemplo_coder');

db.estudiantes.insertMany( [
   {
      title: 'Titanic',
      year: 1997,
      genres: [ 'Drama', 'Romance' ]
   },
   {
      title: 'Spirited Away',
      year: 2001,
      genres: [ 'Animation', 'Adventure', 'Family' ]
   },
   {
      title: 'Casablanca',
      genres: [ 'Drama', 'Romance', 'War' ]
   }
] )