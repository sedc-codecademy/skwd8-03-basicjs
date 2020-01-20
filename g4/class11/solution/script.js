//user 
function User(username, password, isAdmin) {
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
}

let userDatabase = [];

let superAdmin = new User("admin", "admin", true);
userDatabase.push(superAdmin);
let user1 = new User("viktor", "123123", false);
userDatabase.push(user1);

let loggedUser = {};

//register
let registerUsername = document.getElementById("register-username");
let registerPassword = document.getElementById("register-password");
let registerButton = document.getElementById("register");
let registerDisplay = document.getElementById("register-display");

//login
let loginUsername = document.getElementById("login-username");
let loginPassword = document.getElementById("login-password");
let loginButton = document.getElementById("login");
let logoutButton = document.getElementById("logout");
let loginDisplay = document.getElementById("login-display");
let userDisplay = document.getElementById("user-display");

//admin panel
let adminPanel = document.getElementById("adminPanel");
let adminUserList = document.getElementById("registeredUsers");
adminPanel.style.display = "none";

function register() {
    let userAlreadyExist = true;
    let isUsernameInputNotPristine = false;
    let isPasswordInputNotPristine = false;
    let tempUser = new User(registerUsername.value, registerPassword.value, false);

    for(let user of userDatabase) {
        if(user.username !== tempUser.username || user.password !== tempUser.password) {
            userAlreadyExist = false;
        } else {
            userAlreadyExist = true;
        }
    }

    if(registerUsername.value = "" || registerUsername.value.length < 4) {
        isUsernameInputNotPristine = true;
    }

    if(registerPassword.value = "" || registerPassword.value.length < 4) {
        isPasswordInputNotPristine = true;
    }

    if(userAlreadyExist || isUsernameInputNotPristine || isPasswordInputNotPristine) {
        registerDisplay.style.color = "red";
        registerDisplay.innerHTML = "error";

        registerUsername.style.border = "1px solid red";
        registerPassword.style.border = "1px solid red";
    } else {
        userDatabase.push(tempUser);
        
        registerDisplay.style.color = "green";
        registerDisplay.innerHTML = "register successful";

        registerUsername.style.border = "1px solid gray";
        registerPassword.style.border = "1px solid gray";
    }
    
    registerUsername.value = "";
    registerPassword.value = "";

    console.log(userDatabase);
}

registerButton.addEventListener("click", register);

function login() {
    for(let i = 0; i < userDatabase.length; i++) {
        if(userDatabase[i].username === loginUsername.value && userDatabase[i].password === loginPassword.value) {
            loggedUser = userDatabase[i];

            userDisplay.innerHTML = `Hello, ${loggedUser.username}!`;

            loginDisplay.style.color = "black";
            loginDisplay.innerHTML = `${loggedUser.username} has been logged in!`;

            loginUsername.style.border = "1px solid gray";
            loginPassword.style.border = "1px solid gray";

            loginUsername.value = "";
            loginPassword.value = "";

            if(loggedUser.isAdmin === true) {
                renderAdminPanel();
            } else {
                hideAdminPanel();
            }

            return;
        }
    }

    loginDisplay.style.color = "red";
    loginDisplay.innerHTML = `error`;

    loginUsername.style.border = "1px solid red";
    loginPassword.style.border = "1px solid red";

}

loginButton.addEventListener("click", login);

function logout() {
    userDisplay.innerHTML = "";
    loginDisplay.innerHTML = `${loggedUser.username} has been logged out!`;

    hideAdminPanel();
    loggedUser = {};
}

logoutButton.addEventListener("click", logout);


function renderAdminPanel() {
    adminUserList.innerHTML = "";
    adminPanel.style.display = "block";

    for(let user of userDatabase) {
        adminUserList.innerHTML += `<li>username: ${user.username} - password: ${user.password} - isAdmin: ${user.isAdmin}`;
    }
}

function hideAdminPanel() {
    adminPanel.style.display = "none";
}








