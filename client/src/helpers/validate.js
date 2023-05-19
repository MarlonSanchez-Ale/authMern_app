import { toast } from "react-hot-toast";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export async function usernameValidate(values) {
    const errors = usernameVerify({}, values)

    return errors;
}

function usernameVerify(error = {}, values) {
    if(!values.username) {
        error.username =  toast.error('Username Required...!')
    } else if(values.username.includes(" ")){
        error.username = toast.error("Invalid username!!")
    }

    return error;
}

// Validando  password

export async function passworValidate(values) {
    const errors = passwordVerify({}, values)

    return errors;
}

function passwordVerify(error = {}, values) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        error.password =  toast.error("Password required...!");
    } else if(values.password.includes(" ")){
        error.password = toast.error("Wrong Password...!")
    } else if(values.password.length < 4) {
        error.password = toast.error("Password must be more than 4 characters long")
    } else if(!specialChars.test(values.password)){
        error.password = toast.error("Password must have special character")
    }
}

// Validate reset password
export async  function resetPasswordValidation(values) {
    const errors = passwordVerify({}, values)

    if (values.password !== values.confirm_pass) {
        errors.exist = toast.error("Password not match.")
    }

    return errors;
    
}


// validate register 

export async function registerValidation(values) {
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);
}

// validate email

function emailVerify(error = {}, values) {
    const emailValid = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if(!values.email){
        error.email = toast.error("Email Required...!")
    } else if (emailValid.test(values.email) ) {
        error.email = toast.error("Invalid email address!!!")
    }

    return error;
}

// Validate profile form
export async function profileValidation(values) {
    const errors = emailVerify({}, values)
    return errors;
}
