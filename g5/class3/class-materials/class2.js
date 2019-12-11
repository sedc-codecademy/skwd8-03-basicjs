var a = 5;

switch(a)
{
    case 1:
    case 2: console.log("A = 1 and 2");
    break;

    case a > 3: console.log("a > 3");
    break;
    
    case 5: console.log("A = 5");
    break;
    case 6: console.log("A = 6");
    break;
    default: console.log(`A = ${a}`);
    break;
}


if(a === 1 || a === 2)
{
    console.log("A = 1 and 2");
}
else if( a === 5 )
{
    console.log("A = 5");
}
else if( a === 6 )
{
    console.log("A = 6");
}
else
{
    console.log(`A = ${a}`);
}

setInterval(() => { a = a+1 }, 100);