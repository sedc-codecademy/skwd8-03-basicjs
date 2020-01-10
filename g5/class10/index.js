var APIURL = 'https://jsonplaceholder.typicode.com/';
//$("CSS_CLASS").append("HTML OF NEW ELEMENT");

$(document).ready(function(){
    console.log("Ready");
    getUsers();
});

function getUsers()
{
    $.get(`${APIURL}users`).then(
        function(response){
            console.log(response);
            fillUsersList(response);
        },
        function(error){
            console.log(error);
        }
    )
}

function fillUsersList(users)
{
    let ul = $(".users");
    ul.html("");

    users.map(function(user){
        ul.append(`<li>
        <a onclick="getUserPostsTodosAlbums(${user.id})">${user.name}</a>
        </li>`);
    })
}

function getUserPostsTodosAlbums(userId)
{
    console.log(userId);
    if( ! userId)
    return false;

    $.get(`${APIURL}posts?userId=${userId}`).then(
        function(response){ displayUserDataInUl('post', '.posts', response)},
        function(error){console.log(error)}
    );
    $.get(`${APIURL}todos?userId=${userId}`).then(
        function(response){ displayUserDataInUl('todo', '.todos', response)},
        function(error){console.log(error)}
    );
    $.get(`${APIURL}albums?userId=${userId}`).then(
        function(response){ displayUserDataInUl('album', '.albums', response)},
        function(error){console.log(error)}
    );
}

function displayUserDataInUl(type, element, data)
{
    //data = {id: 1, title:something}
    let ul = $(element);
    ul.html('');

    if(type === 'post')
    {
        for(let x in data){
            ul.append(`<li><a onclick="loadComments(${data[x].id})">${data[x].title}</a></li>`);
        };
    }
    else if(type === 'album')
    {
        for(let x in data){
            ul.append(`<li><a onclick="loadPhotos(${data[x].id})">${data[x].title}</a></li>`);
        };
    }
    else if(type === 'photo')
    {
        for(let x in data){
            ul.append(`<li><img src="${data[x].thumbnailUrl}"><span>${data[x].title}</span></li>`);
        };
    }
    else
    {
        for(let x in data){
            ul.append(`<li><a>${data[x].title}</a></li>`);
        };
    }
}

function loadComments(postId)
{
    if( ! postId)
    return false;

    $.get(`${APIURL}comments?postId=${postId}`).then(
        function(response){ displayUserDataInUl('comment', '.comments', response)},
        function(error){console.log(error)}
    );
}

function loadPhotos(albumId)
{
    if( ! albumId)
    return false;

    $.get(`${APIURL}photos?albumId=${albumId}`).then(
        function(response){ displayUserDataInUl('photo', '.photos', response)},
        function(error){console.log(error)}
    );
}