/*************************
 * Hoisting
*/
//funtions
calculateAge(1996);
 function calculateAge(year){
      console.log( 2020 -  year);
    }
//calculateAge(1996);
    var retirement = function(year){
        console.log( 65 - ( 2020 - year));
    }
    retirement(1996);
//variables
console.log(age);  
var age = 23;

function foot(){
    var age = 65;
    console.log(age);
}
foot();
console.log(age);


//Ejemplo
var a = 'Hello!';
first();

function first(){
    var b = 'Hi!';
    second();

    function second(){
        var c = 'Hey!';
        third()
    }
}

function third(){
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}

/* calculateAge(1996);

function calculateAge(year){
    console.log( 2020 - year);
    console.log(this);
} */

var John = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log( 2020 - this.yearOfBirth);
    }
}
John.calculateAge();

var Mike = {
    name: 'Mike',
     yearOfBirth: 1984
};

Mike.calculateAge = John.calculateAge;
Mike.calculateAge();





/*************************
 * 
*/









/*************************
 * 
*/


