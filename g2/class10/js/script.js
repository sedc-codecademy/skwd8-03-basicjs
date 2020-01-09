let btn = $("#btnRegister");
let firstName = $("#firstName");
let errors = $("#errors");

btn.on("click", function () {
    let fristNameValue = firstName.val();
    let validateResult = validateInputs(fristNameValue);
    if(validateResult.succeded){
        firstName.css("border-color", "none");
        errors.html(``);
        alert("Hello " + fristNameValue + "! " + validateResult.message);
    }else{
        firstName.css("border-color", "red");
        errors.html(`<p style="color:red;">* ${validateResult.message}</p>`)
    }
});


function validateInputs(firstName) {
    if (firstName.length <= 2) {
        return {
            succeded: false,
            message: "The first name must be at least 2 characters long!"
        }
    }
    if (!isNaN(parseInt(firstName))) {
        return {
            succeded: false,
            message: "The first name cannot contain number!"
        }
    }


    
    return {
        succeded: true,
        message: "You have succesfully registered!"
    }
}