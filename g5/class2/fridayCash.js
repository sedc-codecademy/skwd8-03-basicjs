var fridayCash = 0;

if(fridayCash >= 50)
{
    console.log("Go to diner and movie");
}
else if(fridayCash >= 35)
{
    console.log("Go and have a meal");
}
else if(fridayCash >= 12)
{
    console.log("Go to cinema");
}
else
{
    console.log("Watch TV!");
}

//Tercial IF statement
var cash = fridayCash > 10 ? "Get an icecream too" : "You poor :)";
/*
    var cash;
    if(fridayCash > 10)
    cash = "Get an icecream too";
    else 
    cash = "You poor :)"
*/
 console.log(cash);

var drink = fridayCash > 5 ? "Get lemonade" : fridayCash > 1 ? "Get a STEP" : "Hahahaah";

/*
    var drink;
    if(fridayCash > 5)
    {
        drink = "Get lemonade";
    }
    else
    {
        if(fridayCash > 1)
        {
            drink = "Get a STEP";
        }
        else
        {
            drink = "Hahahaha";
        }
    }
*/

console.log(drink);

console.log("And have a nice day");