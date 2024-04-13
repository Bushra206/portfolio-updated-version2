let username = document.getElementById('username');
let password = document.getElementById('password');
let flag = true;

function validateForm() {
    flag = true; // Reset flag to true before each validation check

    if (username.value === "") {
        document.getElementById('usererror').innerHTML = "Username is empty";
        flag = false;
    } else if (username.value.length < 3) {
        document.getElementById('usererror').innerHTML = "Username requires minimum 3 characters";
        flag = false;
    } else {
        document.getElementById('usererror').innerHTML = "";
    }

    if (password.value === "") {
        document.getElementById('passerror').innerHTML = "Password is empty";
        flag = false;
    } else {
        document.getElementById('passerror').innerHTML = "Password is weak"; // Show message by default
        if (password.value.length >= 4) {
            flag = true;
            document.getElementById('passerror').innerHTML = ""; // Hide message if password is 4 characters or more
        } else {
            flag = false;
        }
    }

    return flag;
}

password.addEventListener("input", strength);

function strength() {
    if (password.value.length >= 4) {
        document.getElementById('passerror').innerHTML = ""; // Hide message if password is 4 characters or more
    } else {
        document.getElementById('passerror').innerHTML = "Password is weak"; // Show message if password is weak
    }
}
