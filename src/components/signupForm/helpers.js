function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validate(state) {

  const regEx = /^[a-z][a-z\s]*$/;
  let errors = {};

    if (state.firstName.trim() === "") {
      errors.firstName = "First name can't be empty";
    } else if (!state.firstName.match(regEx)) {
      errors.firstName = "Name can only contain alphabets";
    }

    if (state.lastName.trim() === "") {
      errors.lastName = "Last name can't be empty";
    } else if (!state.lastName.match(regEx)) {
      errors.lastName = "Name can only contain alphabets";
    }
    if (state.email.trim() === "") {
      errors.email = "Email can't be empty";
    } else if(!validateEmail(state.email)) {
      errors.email = "Email is invalid"
    }
    if (state.password.trim() === "") {
      errors.password = "Password can't be empty";
    } else if (state.password.length < 8) {
      errors.password =
        "Password must be equal to or greater than 8 characters";
    }
    if (state.confirmPassword.trim() === "") {
      errors.confirmPassword = "Confirm password can't be empty";
    } else if (state.confirmPassword !== state.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (state.contact.trim() === "") {
      errors.contact = "Contact can't be empty";
    }


    return errors

}