$(document).ready(function(){
    let jsObject = {
        trainer:"Igor Stojanovski",
        students: [
           "Bob",
           "Samantha",
           "Chris",
           "Jill",
           "Greg"
        ],
        dogOwner: true,
        age: 30,
        children: null,
        Academy: "Code",
        skills:{
           Angular: true,
           Python: false
        }
     }
     console.log(jsObject);

     let json = JSON.stringify(jsObject)
     console.log(json);

     let jsonToObject = JSON.parse(json);
     console.log(jsonToObject);

     let data;

     $.ajax({
         url: "https://jsonplaceholder.typicode.com/users",
         method: "GET",
         success: function() {
            console.log("success");
         },
         error: function() {
            console.log("error!");
         }}).done(function(response){
             data = response;
         }) 
 
    $("#data").click(function() {
        $("#userUl").html("")
        for(let user of data) {
            $("#userUl").append(`<li>${user.name} - ${user.email}</li>`)
        }
    })

})