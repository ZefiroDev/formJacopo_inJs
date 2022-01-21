
class user{
    constructor(name,lastname,username,date,gender,email,password,password_match,errorMsg){
        this.name = name;
        this.lastname= lastname;
        this.username = username;
        this.date = date;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.password_match = password_match;
        this.errorMsg = errorMsg;
    }
validateName(){
let success = false;
const regEx = new RegExp(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/g);
let result = regEx.test(this.name);
if(this.name != null && this.name != ""){
    if(result){
        success = true
    }else{this.errorMsg ="formato nome non valido"}
} else{this.errorMsg ="campo del nome vuoto"}

return success
};
validateLastname(){
    let success = false;
    const regEx = new RegExp(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/g);
    let result = regEx.test(this.lastname);
    if(this.lastname != null && this.lastname != ""){
        if(this.lastname !== this.name){
            if(result){
                success = true
        }}else{this.errorMsg ="formato cognome non valido"}
    } else{this.errorMsg ="campo del cognome vuoto"}

    return success
};
validateUsername(){
let success = false
if(this.username != null && this.username != ""){
    success = true;
        
    }else{this.errorMsg ="campo username vuoto"}
return success
};
validateDate(){
let success = false
let row2 = new Date(this.date);
let today = new Date()
if(row2.getDate() >= today.getDate()){
                    success = true

                }else {this.errorMsg ="data sbagliata"}


return success
};
validateGender(){
    let success = false;
    if(this.gender !=""){
        success = true;
    }else{this.errorMsg ="sesso non selezionato"}
    return success

};

validateEmail(){
let success = false;
const regEx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
if(this.email != null && this.email != ""){
if(regEx.test(this.email)){
    success = true
}else{this.errorMsg = "formato email non valido";}
}else{this.errorMsg = " il campo dell'email è vuoto";}
return success
};
validatePassword(){
    let success = false;
    let Password = this.password;
    const regExUpperCase = new RegExp(/[A-Z]/g);
    const regExNumber = new RegExp(/[0-9]/g);
    if(Password != null && Password != ""){
        if (Password.length > 7){
            if(regExUpperCase.test(Password)){
                if(regExNumber.test(Password)){
                    success = true
                }else{this.errorMsg = "assenza Numero"}
            }else{this.errorMsg ="assenza lettra Maiuscola"}
        }else{ this.errorMsg = "password troppo corta"}
    }else {this.errorMsg = "il campo password è vuoto"}

    return success

};
validatePasswordMatch(){

    let success = false;
    if(this.password_match != null && this.password_match != ""){
        if(this.password_match === this.password){
            success = true
        }else {this.errorMsg ="le due password non coincidono"}
    }else{this.errorMsg ="campo vuoto"}
return success
};
}



function validate(){

   
    let name = document.querySelector("#name").value
    let lastname = document.querySelector("#lastname").value
    let username = document.querySelector("#username").value
    let date = document.querySelector("#date_of_birth").value
    let genderMale = document.querySelector("#genderMale");
    let genderFemale= document.querySelector("#genderFemale");
        let gender =""
        if(genderMale.checked){
        
            gender = genderMale.value;
            }
        else if(genderFemale.checked){
            gender = genderFemale.value;
        }
  
    let email = document.querySelector("#email").value;    
    let password = document.querySelector("#pwd").value;
    let password_match = document.querySelector("#pwd_match").value

    const usert = new user(name,lastname,username, date,gender,email,password,password_match,"dato_errato");

    if(usert.validateName()){
        if(usert.validateLastname()){
            if(usert.validateUsername()){
                if(usert.validateDate()){
                    if(usert.validateGender()){
                        if(usert.validateEmail()){
                            if(usert.validatePassword()){
                                if(usert.validatePasswordMatch()){
                                    alert("sei registarto con successo")
                                }else{displayError("error_password_match",usert)}
                            }else{displayError("error_password",usert)}
                        }else{displayError("error_email",usert)} 
                    }else{displayError("error_gender",usert)}
                }else{displayError("error_date",usert)}
            }else{displayError("error_username",usert)}
        }else{displayError("error_lastname",usert);}
    }else {displayError("error_name",usert);}

}
function displayError(id,usert){
    let el = document.getElementById(id);
    let testo = document.createTextNode(usert.errorMsg);
    el.innerText = testo.textContent;

    event.preventDefault();
}