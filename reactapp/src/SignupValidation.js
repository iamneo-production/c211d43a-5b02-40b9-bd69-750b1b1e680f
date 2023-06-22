  function validation(values) {
    let errors = {};
    const emailPattern = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    if (values.name.trim() === '') {
      errors.name = 'Name should not be empty';
    }
  
    if (values.email.trim() === '') {
      errors.email = 'Email should not be empty';
    } else if (!emailPattern.test(values.email)) {
      errors.email = 'Email format is invalid';
    }
  
    if (values.password.trim() === '') {
      errors.password = 'Password should not be empty';
    } else if (!passwordPattern.test(values.password)) {
      errors.password =
        'Password should contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit';
    }
  
    return errors;
  }
  
  export default validation;
  