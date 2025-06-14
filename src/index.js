import "./style.css"


const formEl = document.querySelector("form")
const formInputs = document.querySelectorAll("form input")
const emailInput = document.querySelector("#email")
const emaileError = document.querySelector("#emailError")

const countryInput = document.querySelector("#country")
const countryError = document.querySelector("#countryError")

const postalCodeInput = document.querySelector("#postal-code")
const postalCodeError = document.querySelector("#postal-codeError")

const passwordInput = document.querySelector("#password")
const passwordError = document.querySelector("#passwordError")

const passwordConfirmInput = document.querySelector("#password-confirm")
const passwordConfirmError = document.querySelector("#password-confirmError")


function validatePasswordConfirm(){
 if(passwordConfirmInput.validity.valid){
        passwordConfirmInput.setCustomValidity("")
    }else if(passwordConfirmInput.value !== passwordInput.value){
        passwordConfirmInput.setCustomValidity("- Password does not match")
    }else{
        passwordConfirmInput.setCustomValidity("")
    }
    passwordConfirmError.textContent = passwordConfirmInput.validationMessage
    if(passwordConfirmInput.validationMessage){
        passwordConfirmError.style.display = "block"
    }else{
        passwordConfirmError.style.display = "none"
    }
}
passwordConfirmInput.addEventListener("keydown", validatePasswordConfirm)

function validatePassword(){
  if(passwordInput.validity.valid){
        passwordInput.setCustomValidity("")
    }else if(passwordInput.validity.tooShort){
        passwordInput.setCustomValidity("- Password must be at least 8 characters!")
    }else{
        passwordInput.setCustomValidity("")
    }
    passwordError.textContent = passwordInput.validationMessage
    if(passwordInput.validationMessage){
        passwordError.style.display = "block"
    }else{
        passwordError.style.display = "none"
    }
}


passwordInput.addEventListener("keydown", validatePassword)


function validatePostalCode(){
 if(postalCodeInput.validity.valid){
        postalCodeInput.setCustomValidity("")
    }else if(postalCodeInput.validity.patternMismatch){
        postalCodeInput.setCustomValidity("- Postal Code must be exactly 5 digits!")
    }else if(postalCodeInput.validity.tooShort || postalCodeInput.validity.tooLong){
        postalCodeInput.setCustomValidity("- Postal Code must be exactly 5 digits!")
    }else{
        postalCodeInput.setCustomValidity("")
    }
    postalCodeError.textContent = postalCodeInput.validationMessage
    if(postalCodeInput.validationMessage){
        postalCodeError.style.display = "block"
    }else{
        postalCodeError.style.display = "none"
    }
}

postalCodeInput.addEventListener("keydown", validatePostalCode)


function validateCountry(){
 if(countryInput.validity.valid){
        countryInput.setCustomValidity("")
    }else if(countryInput.validity.tooShort){
        countryInput.setCustomValidity("- Please enter an email with at lest 3 characters!")
    }else if(countryInput.validity.valueMissing){
        countryInput.setCustomValidity("- Please enter a country!")
    }else{
        countryInput.setCustomValidity("")
    }
    //console.log(countryInput.validity)
    countryError.textContent = countryInput.validationMessage
    if(countryInput.validationMessage){
        countryError.style.display = "block"
    }else{
        countryError.style.display = "none"
    }
}


countryInput.addEventListener("keydown", validateCountry)

function validateEmail(){
    if(emailInput.validity.valid){
        console.log("validity property")
        emailInput.setCustomValidity("")
       
    }else if(emailInput.validity.tooShort){
        emailInput.setCustomValidity("- Please enter an email with at lest 8 characters!")
        

    }else if(emailInput.validity.valueMissing){

        emailInput.setCustomValidity("- Please enter an email!")
        
    }
    else if(emailInput.validity.typeMismatch){
        emailInput.setCustomValidity("- Please enter a valid email!")
       
        
    }else{
        emailInput.setCustomValidity("")
       
    }
    //console.log(emailInput.validity)
    emaileError.textContent = emailInput.validationMessage
    if(emailInput.validationMessage){
        emaileError.style.display = "block"
    }else{
        emaileError.style.display = "none"
    }

}

function validateInputs(){
    let allValid = true
    validateEmail()
    validateCountry()
    validatePostalCode()
    validatePassword()
    validatePasswordConfirm()
    const formInputArray = [...formInputs]
    formInputArray.forEach(element => {
        if(!element.validity.valid){ allValid = false }
    })
    return allValid
}

emailInput.addEventListener("keydown", validateEmail)

formEl.addEventListener("submit", (e) => {
    const allValid = validateInputs()
    if(!allValid){ e.preventDefault() }else{
        alert("Bravo Man, you passed!")
    }
})


