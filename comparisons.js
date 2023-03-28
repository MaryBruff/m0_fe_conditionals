// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log(numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log(numberTeachers === stringTeachers);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log(numberTeachers !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log(numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log(numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log(numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log(numberStudents <= 21);
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: This line of code is being asked to print whether or not 4 is less than 9. This Boolean value should print true. 


var books = 3;
console.log(4 < books);
// YOU DO: The first line of code is determining that the variable is set to 3. 
// The second line of code is asking whether 4 is less than the variable of books which is (3) and should print false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO:The first two lines are declaring that the variables friends equals the value of 6 and siblings equals the value of 2. 
// The third line is comparing whether the number of friends is greater than the number of siblings which should print true.  
//
var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: The first two lines are declaring that the number of attendees to a value 9 and the second is declaring that the number of meals values to 8.
// The third line of code is asking to compare whether the value of attendees is not equal to the number of meals.
// The log should print true.


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);
// True.


// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);
// False

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);
// True

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && isPuppy);
//No determination

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: Th final line of code does not evaluate to anything because we never defined puppy as a variable. 