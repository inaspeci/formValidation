const user = {
   username: "inaspeci",
   password: "!formValidation"
  };

let usernameEl = document.querySelector('[data-ui="username"]');
let passwordEl = document.querySelector('[data-ui="password"]');
let submitEl = document.querySelector('[data-ui="submit"]');
let errorEl = document.querySelector('[data-ui="error"]')
const usernameErrorMsg = "The username you entered is not associated with an account. Please check your username and try again."
const passwordErrorMsg = "Unfortunately, the password you entered is incorrect. Please check again."

function enableOrDisableButton(){
    if(usernameEl.value && passwordEl.value){
        submitEl.disabled = false;
        submitEl.classList.add("btn-primary")
    }else{
        submitEl.disabled = true;
       
    }
}

function validate(){

    if(usernameEl.value !== user.username){
        errorEl.innerHTML = usernameErrorMsg;
        return
    }
    if(passwordEl.value !== user.password){
        errorEl.innerHTML = passwordErrorMsg;
        return
    }
    errorEl.innerHTML = "";
    alert("success")
    
}

usernameEl.addEventListener("input",() => {
     enableOrDisableButton()
});

passwordEl.addEventListener("input",() => {
    enableOrDisableButton()
});

submitEl.addEventListener("click",() => {
    validate()
});



