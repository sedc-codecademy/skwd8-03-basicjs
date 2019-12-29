//https://jsonplaceholder.typicode.com/guide.html

$(document).ready( function(){
    //jQuery(document).ready....
    console.log(123, 'Doc ready');

    // let uls = $("footer > nav > ul").eq(2); //console.log(uls);

    // $(uls).hide();

    // setTimeout(() => {
    //     $(uls).show();
    // }, 3000);

    
    // $(uls).addClass('someting-else');

    // $("section > div:nth-child(2)").addClass("div2");
    // $("section > div:last-child").removeClass("part3");

    // let elements = $("*[class]"); console.log(elements);

    // $("section > div:first-child")[0].innerText = 'ad'

    // $("section > div:first-child").append("<span>Something</span>");
    // $("section > div").eq(2).remove();

    // $("section > div:first-child")
    // .append("<span>Something</span>")
    // .append("<a href='#'>New</a>")
    // .append("<div><p>asdasdsadsa</p></div>")
    // .remove("a");

    function appendPosts(posts)
    {
        let ul = $(".todos > ul");
            posts.map((post) => {
                ul.append(`<li>
                    <span>${post.userId}</span>
                    <span>${post.id}</span>
                    <span>
                    <h1>${post.title}</h1>
                    <p>${post.body}</p>
                    </span>
                    </li>`);
            })
    }

    $.get('https://jsonplaceholder.typicode.com/posts').then(
        function(posts){
            console.log(posts);
            appendPosts(posts);
        },
        function(error){
            console.log(error);
        }
    )

    $.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'My new post',
        body: 'Learning post in jQuery',
        userId: 2
    }).then(
    function(post){
        console.log(post);
        appendPosts([post]);
    },
    function(error){
        console.log(error);
    });
    // $.put();
    // $.delete();
});

// function locateElement(element, index, childElement, childIndex, text)
// {
//     let parentEl = document.querySelectorAll(element);
    
//     if(parentEl && parentEl.length)
//     parentEl.forEach((child, i) =>
//     {
//         if(i === index - 1)
//         for(let j = 0; j < parentEl[i].children.length; j++) {
//             if(j === childIndex - 1)
//             parentEl[i].children[j].children[0].innerText = text;
//         }
//     })
// }

// locateElement("footer > nav > ul", 2, "li", 3, "somethingelse");

// let divs = document.querySelectorAll("section > div");
// let text = divs[1].innerText;
// text = text.replace(/text/ig, 'something else');
// divs[1].innerText = text;