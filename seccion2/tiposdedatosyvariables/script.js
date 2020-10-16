/*************************
*variables and data types
*/
/*
var firstName = 'Jhon';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = 'true';
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);


//Variable naming rules
var _3years = 3;
var jhonMark = 'John and Mark';
var if = 23;

/*************************
*variables mutation and data types coercion
*/
/*
var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMorried;
job ='teacher';
isMorried = false;

console.log(firstName + ' is a ' +  + age + ' year old ' + job + ' . Is he married? ' + isMorried );

//variable mutation
age = 'twenty eigth';
job = 'driver';

alert(firstName + ' is a ' +  + age + ' year old ' + job + ' . Is he married? ' + isMorried );

var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);
*/
/*************************
*Basic Operators
*/

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
//Math operators
yearJohn = year - ageJohn;
yearMark = year - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operators
var johnOlder = ageJohn > ageMark ;
console.log(johnOlder);


//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha John')
var x;
console.log(typeof x);

/*************************
*Operator precedence
*/
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var IsFullAge = now - yearJohn >= fullAge;
console.log(IsFullAge);

var ageJohn = now - yearJohn;
var ageMark =  35;
var average = (ageJohn + ageMark)/ 2;
console.log(average);


//multiple assignments
var x = y = (3 + 5) * 4 - 6; // 8*4-6=26
console.log(x , y);

//more operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

//Ejercio Indice de Masa Corporal
var imcJohn, imcMark;
massJohn = 80;
heigthJohn = 1.70;

massMark = 96;
heigthMark = 1.90;

var imcJohn = massJohn / (heigthJohn * heigthJohn);
console.log(imcJohn);
var imcMark = massMark / (heigthMark * heigthMark);
console.log(imcMark);

var fullMass = massMark > massJohn;
console.log(fullMass);

console.log('El indice de masa corporal es mas alto que de Jonh' + ' ' + fullMass);

/*************************
 * If / else statements
*/
var firstName = 'Jonh';
var CivilStatus = 'single';

if( CivilStatus === 'married'){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if(isMarried){
    console.log(firstName + ' is married!');
} else{
    console.log(firstName + ' will hopefully marry soon :)');
}

var imcJohn, imcMark;
massJohn = 80;
heigthJohn = 1.70;

massMark = 96;
heigthMark = 1.90;

var imcJohn = massJohn / (heigthJohn * heigthJohn);
console.log(imcJohn);
var imcMark = massMark / (heigthMark * heigthMark);
console.log(imcMark);

if(imcMark > imcJohn){
   console.log('Mark\'s IMC is higher than John\'s.');
} else{
  console.log('John\'s IMC is higher than Mark\'s.');
}

/*************************
 * Boolean logic
*/
var firstName = 'Jonh';
var age = '20';

if(age < 13){
console.log( firstName + ' is a boy.');
} else if(age >= 13 && age<20){
console.log(firstName + ' is a teenager');
} else if(age >= 20 && age < 30){
 console.log(firstName + ' is a young man.');
}else{
 console.log(firstName + ' is a man.');
}

/*************************
 * The ternary Operator and Switch Statements
*/
var firstName = 'Jonh';
age = 14;
//Ternary operator
age >= 18 ? console.log(firstName + ' drinks a beer.')
: console.log(firstName + ' drinks a juice');
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/* if(age >= 18){
    var drink = 'beer';
} else {
    var drink = 'juice';
} */

//Switch Statements
var job = 'teacher';
switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
        case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
        case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
        default:
        console.log(firstName + ' does something else.');
}

age =28;
switch (age){
    case age < 13:
        console.log( firstName + ' is a boy.');
        break;
    case age >= 13 && age<20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default: 
        console.log(firstName + ' is a man.');
}

/*************************
 * Truthy and falsy values and equality operators 
*/
//falsy values: Undefined, null, 0, '', NaN
//Truthy values: Not falsy values
var heigt;
heigth = 0;

if(heigth || heigth === 0){
   console.log('variable is defined');
}else{
   console.log(' varible has Not beeb defined');
}

//equality operators
if(heigt === '23')
{
    console.log('The == operator does type coercion!');
}

//Ejercicio 2
var proequipojohn, proequipomike,proequipomary;
puntaje1jonh = 89;
puntaje2john = 120;
puntaje3john = 103;

puntaje1mike = 116;
puntaje2mike = 94;
puntaje3mike = 123;

puntajemary1 = 97;
puntajemary2 = 134;
puntajemary3 = 185;

proequipojohn = (puntaje1jonh + puntaje2john + puntaje3john) / 3;
proequipomike = (puntaje1mike + puntaje2mike + puntaje3mike) /3;
proequipomary = (puntajemary1 + puntajemary2 + puntajemary3) / 3;
console.log( proequipojohn, proequipomike, proequipomary);

if(proequipojohn > proequipomike && proequipojohn > proequipomary){
    console.log('John\'s team wins whits' + proequipojohn + 'points');
} else if(proequipomike > proequipojohn && proequipomike > proequipomary){
    console.log('Mike\'s team wins whits ' + proequipomike + ' points');
} else if(proequipomary > proequipojohn && proequipomary > proequipomike){
    console.log('Mary\'s team wins whits ' + proequipomary + ' points');
}else{
    console.log('There is a draw');
}


/* if(proequipojohn > proequipomike){
    console.log('John\'s team wins whits' + proequipojohn + 'points');
} else if(proequipomike > proequipojohn){
console.log('Mike\'s team wins whits ' + proequipomike + ' points');
}else{
 console.log('There is a draw');
} */

/*************************
 * Funtion
*/
year = 2018;
function calculateage(birthyear){
    return 2018 - birthyear;
}

var ageJohn = calculateage(1970);
var ageMike = calculateage(1948);
var ageJane = calculateage(1976);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(birthyear, firstName){

        var age = calculateage(birthyear);
        var retirement = 65 - age;

        if(retirement > 0){
            console.log(firstName, + ' retiries in ' + retirement + ' years.');
        }else{
            console.log(firstName + ' is already retired.');
        }
        
}

yearsUntilRetirement(1970, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1976, 'Jane');

/*************************
 * Arrays
*/
//inicializa array

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

 console.log(names[2]);
 console.log(names.length);

 //Mutate array data
 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log(names);

 //Different data types
 var John = ['John', 'Smith', 1990, 'Designer', false];
 John.push('Blue');
 John.unshift ('Mr.');
 console.log(John);

John.pop()
John.pop()
John.shift()
console.log(John);

console.log(John.indexOf(23));

var isDesigner = John.indexOf('Designer') === -1 ? 'John is Not a Designer' : 'John Is a Designer';
console.log(isDesigner);


//Ejercicio 3
function tipcalculator(bill){
    var porcentaje;
    if(bill < 50){
        porcentaje = .2;
    } else if (bill >=  50 && bill < 200){
        porcentaje = .15;
    } else{
        porcentaje = .1;
    } 
    return porcentaje * bill;
}
var bills = [124, 48, 268];
var tips = [tipcalculator (bills[0]), tipcalculator (bills[1], tipcalculator (bills[2]))];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues);
/*************************
 * Objects and propierties
*/
//Object Literal
var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthyear : 1990,
    family : ['Jane',  'Mark', 'Bod', 'Emily'],
    job : 'teacher',
    isMarried : false
};

console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthyear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//New object syntax
var Jane = new Object();
Jane.firstName = 'Jane';
Jane.birthyear = 1969;
Jane['lastName'] = 'Smith';
console.log(Jane);

/*************************
 * Objects and methods
*/
/* var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthyear : 1992,
    family : ['Jane',  'Mark', 'Bod', 'Emily'],
    job : 'teacher',
    isMarried : false,
    calcAge: function(){
        this.age =  2018 - this.birthYear;
    }
};
john.calcAge();
console.log(john); */
//console.log(john.calcAge());

//Ejercicio 4
var John = {
    Name : 'John Alborar',
    mass : 86,
    heigth : 1.60,
    calcIMC: function(){
         this.imc = this.mass / (this.heigth * this.heigth);
         return this.imc;
    }   
}

var Mark = {
    Name : 'Mark Perez',
    mass : 96,
    heigth : 1.90,
    calcIMC: function(){
         this.imc = this.mass / (this.heigth * this.heigth);
         return this.imc;
    }   
}


if(John.calcIMC() > Mark.calcIMC()){
   console.log(John.Name + ' has a higher IMC of ' + John.imc);
}else if(Mark.imc > John.imc){
    console.log(Mark.Name + ' has a higher IMC of ' + Mark.imc);
}else{
  console.log('They have the same IMC');    
}
//console.log(Mark.calcularimc());

var imcJohn, imcMark;
massJohn = 80;
heigthJohn = 1.70;

massMark = 96;
heigthMark = 1.90;

var imcJohn = massJohn / (heigthJohn * heigthJohn);
console.log(imcJohn);
var imcMark = massMark / (heigthMark * heigthMark);
console.log(imcMark);

if(imcMark > imcJohn){
   console.log('Mark\'s IMC is higher than John\'s.');
} else{
  console.log('John\'s IMC is higher than Mark\'s.');
}
/*************************
 * Loops and Iteration
*/
//for loops
for( var i = 1; i <= 20; i += 2){
 console.log(i);
}

var John = ['John', 'Smith', 1990, 'Designer', false, 'blue'];
for(i = 0; i <  John.length; i++){
    console.log(John[i]);
}
//while loops
var i = 0;
while( i < John.length){
    console.log(John[i]);
    i++;
} 

//continue and break statements 
var John = ['John', 'Smith', 1990, 'Designer', false, 'blue'];
for( var i = 0; i <  John.length; i++){
    if(typeof John[i] !== 'string')continue;
    console.log(John[i]);
} 

for( var i = 0; i <  John.length; i++){
    if(typeof John[i] !== 'string')break;
    console.log(John[i]);
} 

//looping backwards
for( var i = John.length - 1; i >= 0; i--){
    if(typeof John[i] !== 'string');
    console.log(John[i]);
} 


//5
var John  = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [],
        this.finalValues = [];

        for( var i = 0; i < this.bills [i]; i++) {

            var porcentaje;
            var bill = this.bills[i];
            
            if(bill < 50) {
                porcentaje = .2;
            } else if (bill >= 50 && bill < 200) {
                porcentaje = .15;
            } else {
                porcentaje = .1;
            }
            this.tips[i] = bill * porcentaje;
            this.finalValues[i] = bill  + bill * porcentaje;  
        }
    }   
}

var Mark  = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function(){
        this.tips = [],
        this.finalValues = [];

        for( var i = 0; i < this.bills [i]; i++) {

            var porcentaje;
            var bill = this.bills[i];
            
            if(bill < 100) {
                porcentaje = .2;
            } else if (bill >= 100 && bill < 300) {
                porcentaje = .1;
            } else {
                porcentaje = .25;
            }
            this.tips[i] = bill * porcentaje;
            this.finalValues[i] = bill  + bill * porcentaje;  
        }
    }   
}
John.calcTips();
Mark.calcTips();
console.log(John, Mark);

