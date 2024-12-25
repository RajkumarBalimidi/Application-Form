var getId = (id) =>{
    return document.getElementById(id);
}
var getClasses = (classes) =>{
    return document.getElementsByClassName(classes);
}

var errMsg = getClasses("error");
var form = getId("myForm");
var firstName = getId("firstName");
var middleName = getId("middleName");
var lastName = getId("lastName");
var email = getId("email");
var date = getId("date");
var age = getId("age");
var mobile = getId("mobile");
const radioButtons = document.querySelectorAll('input[name="gender"]');
const checkBox = document.querySelectorAll('input[name="area"]');
const selectSkill = getId('mySelect');
var country = getId("country");
var state = getId("state");
var address = getId("address");
var npassword = getId("npassword");
var cpassword = getId("cpassword");
var submit = getId("submit");
var success = getId("success");
success.style.textAlign = "center";

form.addEventListener('submit',(event)=>{
    event.preventDefault()  
 
    firstNameValid = validateFields(firstName, 0, "First Name not null");
    lastNameValid = validateFields(lastName, 1, "Last Name not null");
    emailValid = validateFields(email, 2, "Email not null");
    dobValid = validateFields(date, 3, "Date of Birth not null");
    ageValid = validateFields(age, 4, "Age not null");
    mobileValid = validateFields(mobile, 5, "Mobile Numbere not null");
    genderValid = validateFields(radioButtons, 6, "Gender not null");
    areaValid = validateFields(checkBox,7, "Area not null");
    skillValid = validateFields(selectSkill,8, "Skills should not be none");
    countryValid = validateFields(country, 9, "Country Name not null");
    stateValid = validateFields(state, 10, "State Name not null");
    addressValid = validateFields(address, 11, "Address not null");
    passwordValid = validateFields(npassword, 12, "New Password not null");
    newPasswordValid =validateFields(cpassword, 13, "Confirm Password not null");

    if(firstNameValid==true && lastNameValid==true && emailValid==true && dobValid==true && 
        ageValid==true && mobileValid==true && genderValid==true && areaValid==true && skillValid==true && countryValid==true &&
        stateValid==true && addressValid==true && passwordValid==true && newPasswordValid==true)
        {
            alert("Form is Getting Submitted. Please wait.!!!");
            success.textContent = "Form is Getting Submitted. Please wait.!!!";
            success.style.color = "red";
            setTimeout(()=>{
                alert("Form Submitted Successfully");
                success.textContent = "Form Submitted Successfully";
                success.style.color = "green";
                window.location.href = "successPage.html";
           },3000)
        }
})

function validateFields(documentRef, classRef, errorMessage)
{
    if(documentRef == radioButtons)
    {
        let risSelected = false;
        for (const radio of radioButtons) {
        if (radio.checked) {
            risSelected = true;
            break;
            }
        }
    
        if(risSelected)
        {
            errMsg[classRef].textContent = '';
            return true;
        }
        else
        {
            errMsg[classRef].textContent = errorMessage;
            errMsg[classRef].style.color = "red";
            return false;
        }
    }

    if(documentRef == checkBox)
        {
            let cisSelected = false;
            for (const checkbox of checkBox) {
            if (checkbox.checked) {
                cisSelected = true;
                }
            }
        
            if(cisSelected)
            {
                errMsg[classRef].textContent = ''
                return true;
            }
            else
            {
                errMsg[classRef].textContent = errorMessage;
                errMsg[classRef].style.color = "red";
                return false;
            }
    }
    
    if(documentRef == selectSkill)
        {
            if(documentRef.value !== "None")
            {
                errMsg[classRef].textContent = '';
                return true;
            }
            else
            {
                errMsg[classRef].textContent = errorMessage;
                errMsg[classRef].style.color = "red";
                return false;
            }
    }
  
    if(documentRef.value == '')
    {            
        documentRef.style.border = "2px solid red";
        errMsg[classRef].textContent = errorMessage;
        errMsg[classRef].style.color = "red";
        return false; 
    }
    if(documentRef == cpassword)
    {
        if(npassword.value === cpassword.value)
        {
            errMsg[classRef].textContent = '';
            return true;
        }
        else
        {
            documentRef.style.border = "2px solid green";
            errMsg[classRef].textContent = "Password not matched"
            errMsg[classRef].style.color = "red";
            return false;
        }
    }
    else
    {
        documentRef.style.border = "2px solid green";
        errMsg[classRef].textContent = '';
        return true;
    }
}

