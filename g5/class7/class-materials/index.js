

function highLightAndExpand(e)
{
    //console.log(e);
    let span = e.target; //locate span element on which event happend
    span.style.color = 'red';
    span.style['font-size']='40px';
}

function unhighlightAndShrink(e)
{
    let span = e.target; //locate span element on which event happend
    span.style.color = 'black';
    span.style['font-size']='16px';
}

function counter()
{
    let div = document.getElementById('count');
    //div.innerHTML = '';
    for(let i = 0; i < 10; i++)
    {
        let span = document.createElement('span');
        span.innerText = i;
        div.appendChild(span);
    }

    for(let i = 0; i < div.children.length; i++)
    {
        let child = div.children[i];
        child.onmouseover = highLightAndExpand;
        child.onmouseleave = unhighlightAndShrink;
    }
}

function clearScreen()
{
    document.body.innerHTML = '';
}
function clearit()
{
    let div = document.getElementById('count');

    div.onmouseover = clearScreen();
}

function revertBack(e)
{
    e.target.style.background = 'blue';
}
function executeAll(e)
{
    e.target.style.background = 'red';
    /*
        callFunctionOne(e);
        callFunctionTwo(e);
    */
    
    e.target.removeEventListener('click', revertBack);
}

// let div = document.getElementById('count');
// // div.onclick = executeAll;
// div.addEventListener('click', executeAll, false);

let buttons = document.querySelectorAll('button');

function foo(e)
{
    alert('Clicked');
}

function markDivTextRed(e)
{
    let div = document.getElementById('text');
    div.style.color = 'red';
    div.addEventListener('click', foo, false);
}

function revertDivTextBack(e)
{
    let div = document.getElementById('text');
    div.style.color = 'unset';
    div.removeEventListener('click', foo);
}

for(let b = 0; b < buttons.length; b++)
{
    if(buttons[b].getAttribute('name') === 'attach')
    buttons[b].addEventListener('click', markDivTextRed, false);
    else
    buttons[b].addEventListener('click', revertDivTextBack, false);
}

//Check username
//Get username input
var elUsername = document.getElementById('username');
// Get feedback element 
var elMsg = document.getElementById('feedback');

function checkUsername(minlength) {// Declare function 
	//If username too short 
	if(elUsername.value.length < minlength){
		// Set the error message
		elMsg.textContent = `Username must be ${minlength} characters or more`;
	}else{ // Otherwise
		// Clear msg
		elMsg.innerHTML = "";  
	}
}
//When it loses focus
// elUsername.addEventListener('blur',function(){
// // Pass arguments here 
// 	checkUsername(5); 
// }, false);

elUsername.addEventListener('keyup', function(e){
    document.getElementById("current").innerHTML = e.target.value;
    checkUsername(5);
}, false)