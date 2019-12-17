//Step 1 - Create UL
var ul = document.createElement("ul"); //<ul></ul>

//Step 1.1 Create LI
function createLI(n)
{
    var li = document.createElement('li'); //<li></li>
    li.setAttribute('class', 'list-item'); //<li class="list-item"></li>
    li.innerText = `List Item ${n}`;

    return li;
}

//Step 1.2 append li to ul
for(let i = 0; i < 5; i++)
{
    ul.appendChild(createLI(i));
}

//Step 2 - Create CSS
var css = document.createElement('style');
css.innerHTML = `
    .list-item
    {
        background: black;
        padding: 10px;
        font-size: 14px;
        line-height: 18px;
        font-family: Arial;
        color: white;
        margin: 0;
        border-bottom: 1px solid white;
    }

`;
//Step 2.1 append css to document
document.body.appendChild(css);
//Last step
document.body.appendChild(ul);

function changeColorsOfLi()
{
    let li = document.querySelectorAll("li");

    li.forEach(function (element, i){
        element.style.background = `#FF${i * 10}CC`;
    })
}

//Dynamic change of colors of LI
setTimeout(function (){
    changeColorsOfLi();
}, 1000);

setTimeout(function(){
    let li = document.querySelectorAll("li");
    ul.removeChild(li[li.length - 1]);
}, 2000);

let btn = document.createElement('button');
btn.innerText = 'Click me';
btn.onmouseenter = (e) => { console.log(e);
    e.target.style.display = 'none'
}

btn.onmouseover = (e) => { console.log(e);
    e.target.style.display = 'none'
}

btn.onmouseout = (e) => {
    e.target.style.display = 'block';
}

document.body.appendChild(btn)