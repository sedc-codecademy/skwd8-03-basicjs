let phonebook = [
    ['John', 'Doe', '+1 555 223305'],
    ['Jane', 'Doe', '+389 70 000000'],
    ['Terminator', 'VanDam', '+1 555 CallME'],
    ['Ivan', 'Iscelitel', '+38931444444'],
    ['Miki', 'Li', '+38943555444'],
    ['Someone', 'Else', '+123123123123'],
    ['Someone', 'Else', '+123123123123'],
    ['Someone', 'Else', '+123123123123']
];

//phonebook1 = [], phonebook2 = [], phonebook3= []...
let titles = ['#', 'Name', 'Lastname', 'Phone number', 'Action'];

let table = document.createElement('table'); //<table></table>
table.setAttribute('style', 'border: 2px solid #000000');

function createTD(arrayOfItems, action) //arrayOfItems should be array 
{
    let titleTR = document.createElement('tr');
    arrayOfItems.map((tdText, i) => {
        let td = document.createElement('td');
        td.innerText = tdText;
        if(i % 2 !== 0 )
        td.setAttribute('style', 'background: #CCCCCC');
        titleTR.appendChild(td);
    });

    if(action)
    {
        let td = document.createElement('td');
        td.innerHTML = '<a href="#">Edit</a> <a href="#">Delete</a>';
        titleTR.appendChild(td);
    }
    return titleTR;
}

table.appendChild(createTD(titles)); //<table><tr><td>asdas</td>....</tr></table>

phonebook.map((currentRow, index) => {
    console.log(currentRow); // [1, "John", "Doe", "+1 555 223305"]
    table.appendChild(createTD([index + 1].concat(currentRow), true));
    //[index + 1] = [1]   let array = [1];
    //[1].concat(['Someone', 'Else', '+123123123123']) 
    //[1, 'Someone', 'Else', '+123123123123']
});

document.body.appendChild(table);

function formSubmit()
{
    let inputs = document.getElementsByTagName('input');
    let values = [];

    for(let i = 0; i < inputs.length; i++)
    {
        values.push(inputs[i].value); //[10, firstname, lastname...]
        inputs[i].value = '';
    }
    phonebook.push(values);
    table.appendChild(createTD([phonebook.length].concat(values)));
    return false;
}

function clickEvents()
{
    // document.addEventListener('click', function(e){
    //     console.log(e);
    // });
    let a = document.querySelectorAll("a");
    for(let i = 0; i < a.length; i++)
    {
        a[i].addEventListener("click", function(e){
            console.log(e);
            let anchor = e.target;
            let type = anchor.text === 'Edit'? 'Edit': 'Delete'; //Edit || Delete
            let parent = anchor.parentElement.parentElement; //TR;
            let index = parent.rowIndex;
            console.log(type, parent);

            if(type === 'Delete')
            {
                table.removeChild(parent);
                phonebook.splice(index -1, 1); console.log(phonebook)
            }
            else if(type === 'Edit')
            {
                console.log(phonebook[index-1]);
            }
        })
    }
}

clickEvents();