function validation(values) {
    let errors={}
    const email_pattern = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    const Password_pattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(values.email === ""){
        errors.email="Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        errors.email="Email didn't match"
    }else{
        errors.email=""
    }

    if(values.password === ""){
        errors.password="Password should not be empty"
    }
    else if(!Password_pattern.test(values.password)){
        errors.password="password didn't match"
    }else{
        errors.password=""
    }
    return errors;

}
export default validation;
  