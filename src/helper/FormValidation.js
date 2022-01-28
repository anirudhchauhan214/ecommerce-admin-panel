import Regex from "./Regex";
const FormValidation = {
  validateForm: (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map((x) => {
      let refValue = null;
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  },
  resetPass: (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is Required";
        else if (!Regex.EMAIL_REGEXP.test(value)) return "Enter a valid email address";
        else return "";
      default:
        return "";
    }
  },
  loginForm: (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is Required";
        else if (!Regex.EMAIL_REGEXP.test(value)) return "Enter a valid email address";
        else return "";
      case "password":
        if (!value) return "Password is Required";
        // else if (!Regex.PASSWORD_REGEX.test(value))
        //   return "Password must have one number,one capital letter and one special character";
        else return "";
      default:
        return "";
    }
  },
  registerForm: (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is Required";
        else if (!Regex.EMAIL_REGEXP.test(value)) return "Enter a valid email address";
        else return "";
      case "password":
        if (!value) return "Password is Required";
        else if (!Regex.PASSWORD_REGEX.test(value))
          return "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
        else return "";

      case "name":
        if (!value) return "name is Required";
        else if (!Regex.FULL_NAME_REGEX.test(value)) return "Enter a valid name address";
        else return "";
      case "phone":
        if (!value) return "phone is Required";
        else if (!Regex.MOBILE_REGEX.test(value)) return "Please enter a valid phone number";
        else return "";
      default:
        return "";
    }
  },
};

export default FormValidation;
