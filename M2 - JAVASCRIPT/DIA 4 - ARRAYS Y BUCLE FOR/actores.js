const actores = [
  "Tom Hanks",
  "Leonardo DiCaprio",
  "Brad Pitt",
  "Angelina Jolie",
  "Robert De Niro",
  "Meryl Streep",
  "Denzel Washington",
  "Scarlett Johansson",
  "Tom Cruise",
  "Will Smith",
  "Jennifer Lawrence",
  "George Clooney",
  "Sandra Bullock",
  "Keanu Reeves",
  "Dwayne Johnson",
  "Chris Hemsworth",
  "Samuel L. Jackson",
  "Anne Hathaway",
  "Charlize Theron",
  "Hugh Jackman",
  "Ryan Reynolds",
  "Emma Watson",
  "Jennifer Aniston",
  "Johnny Depp",
  "Julia Roberts",
  "Halle Berry",
  "Chris Evans",
  "Mark Wahlberg",
  "Kristen Stewart",
  "Vin Diesel",
  "Matt Damon",
  "Christian Bale",
  "Robert Downey Jr.",
  "Keanu Reeves",
  "Hugh Jackman",
  "Ryan Gosling",
  "Chris Pratt",
  "Tom Hardy",
  "Benedict Cumberbatch",
  "Michael Fassbender",
  "Daniel Craig",
  "Channing Tatum",
  "Dwayne Johnson",
  "Chris Hemsworth",
  "Mark Wahlberg",
  "Denzel Washington",
  "Will Smith",
  "Jamie Foxx",
  "Eddie Murphy",
  "Samuel L. Jackson",
  "Morgan Freeman",
  "Forest Whitaker",
  "Denzel Washington",
  "Will Smith",
  "Don Cheadle",
  "Michael B. Jordan",
  "Mahershala Ali",
];

console.log(actores.length); //Cantidad de actores en la caja

console.log(actores[actores.length - 1]); // accedo al ultimo valor del array

/* 1- Debes acceder al segundo elemento de la lista de actores y modificar su valor por el de su propio nombre , luego muestra en consola el valor modificado*/

actores[1] = "MOISES MARTIN CONDORI YUJRA";
console.log(actores[1]);
/* 2- Debes elminar el ultimo elemento del array y agregar uno nuevo, el cual debe tener el nombre de un actor nacional, debes mostrar en consola el ultimo elemento con el nombre correcto y la longitud del array */

actores.pop();
actores.push("Carla Ortiz");
console.log(actores[actores.length - 1]);
console.log(actores.length);

