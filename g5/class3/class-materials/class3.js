//"use strict";

function myNewFunction() //my_new_function
{
    console.log("executed my new fuction sdfsdfds");
}

console.log("This is some log");
myNewFunction();
console.log("This is second log");
myNewFunction();

console.log("END!");

/*
console.log("This is some log");
console.log("executed my new fuction");
console.log("This is second log");
console.log("executed my new fuction");
*/

function sum(a, b)
{
    //alert(a+b);
    return a + b;
}

function check(c, d)
{
    if(c > d)
    return sum(c, d);
    else if(c === d)
    return 0;
    else
    return NaN;
}

var x = 10;
var y = 15;

console.log(sum(x, y));
sum(x, y);

var sumOfAB = sum(x, y);
x = 11;
y = 22;
console.log(sumOfAB);
sumOfAB = sum(x, y);
console.log(sumOfAB);

console.log(check(5, 3))
console.log(check(5, 5))
console.log(check(x, y))
console.log(check(sum(113, 5), sum(10, 11)));

function diametar(r)
{
    return r * 2;
}

var tax5 = 18;

function calcTax(amount)
{
    
    var tax = (amount * 18) / 100;
    var extraTax = tax5;
    var someSum = sum(tax , amount , extraTax);
    //console.log(this);
    return tax;
}

/*
    var price1 = 100;
    var price2 = 200;
    var price3 = 300;

    var tax1 = (price1 * 18) / 100;
    var tax2 = (price2 * 18) / 100;
    var tax3 = (price3 * 18) / 100;
*/
var price1 = 100;
var price2 = 200;
tax5 = 21;

var price3 = 300;
var tax1 = calcTax(price1);
var tax2 = calcTax(price2);
var tax3 = calcTax(price3);

console.log(calcTax());
console.log(sum(2));

function parent1()
{
    var a = 10;
    var b = 20;

    function child1()
    {
        var c = a;
        var d = b;
        console.log(a, b);
        console.log(sum(a, b));
        console.log(this);
        console.log(c, d);

        function veryChild()
        {
            console.log(this);
        }

        veryChild();
    }
    child1();
    //veryChild();//Throws error here
    //console.log(c, d);
    console.log(this);
}

parent1();


function foo(){} //foo();
var foo = function(){} //foo();

function calculateSuply(age, amountPerDay)
{
    var year = 365 * amountPerDay;
    var maxAge = 80;

    var agesLeft = function(age, years)
    {
        return years - age;
    }

    var totalSnacks = function(perYear, maxAge)
    {
        return perYear * maxAge;
    }

    return `You will eat ${totalSnacks(year, agesLeft(age, maxAge))} snacks to last in next ${agesLeft(age, maxAge)} ages`;
}

console.log(calculateSuply(31, 20))
