let btn = $("#btnRegister");
let firstName = $("#firstName");

btn.on("click", function () {
    getUsers();
})


function getUsers() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log("Uppss...Something went wrong! "
                + error.status);
        }
    });
}




// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(err) {
//         return err;
//     });

