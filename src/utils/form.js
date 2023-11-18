import { contactnumberRegex, emailRegex, passwordRegex } from "./constant";

const firstName = (val) => {
  if (!val.trim()) {
    return "First name is required";
  }
  return "";
};

const lastName = (val) => {
  if (!val.trim()) {
    return "Last name is required";
  }
  return "";
};

const email = (val) => {
  if (!val.trim()) {
    return "Email is required";
  } else if (!emailRegex.test(val)) {
    return "Invalid email address";
  }
  return "";
};

const password = (val) => {
  if (!val.trim()) {
    return "Password is required";
  } else if (!passwordRegex.test(val) && val.length > 0) {
    return "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character.";
  }
  return "";
};

const confirmPassword = (val, cval) => {
  if (!val.trim()) {
    return "Confirm password is required";
  } else if (val !== cval) {
    return "Passwords do not match";
  }
  return "";
};

const otp = (val) => {
  if (!val.trim()) {
    return "Otp is required";
  }
  return "";
};

const contactnumber = (val) => {
  if (!val.trim()) {
    return "Contact number is required";
  } else if (!contactnumberRegex.test(val) && val.length > 0) {
    return "Invalid contact number";
  }
  return "";
};

const textmessage = (val) => {
  if (!val.trim()) {
    return "Message is required";
  }
  return "";
};

export const registerValidation = (name, value, cval = "") => {
  switch (name) {
    case "first_name":
      return firstName(value);
    case "last_name":
      return lastName(value);
    case "email":
      return email(value);
    case "password":
      return password(value);
    case "confirm_password":
      return confirmPassword(value, cval);
    default:
      return "";
  }
};

export const otpValidation = (name, value) => {
  switch (name) {
    case "otp":
      return otp(value);
    default:
      return "";
  }
};

export const loginValidation = (name, value) => {
  switch (name) {
    case "email":
      return email(value);
    case "password":
      return password(value);
    default:
      return "";
  }
};

export const forgotValidation = (name, value) => {
  switch (name) {
    case "email":
      return email(value);
    default:
      return "";
  }
};

export const resetPasswordValidation = (name, value, cval = "") => {
  switch (name) {
    case "otp":
      return otp(value);
    case "password":
      return password(value);
    case "confirm_password":
      return confirmPassword(value, cval);
    default:
      return "";
  }
};

export const contactFormValidation = (name, value) => {
  switch (name) {
    case "first_name":
      return firstName(value);
    case "last_name":
      return lastName(value);
    case "email":
      return email(value);
    case "contact_number":
      return contactnumber(value);
    case "contact_message":
      return textmessage(value);
    default:
      return "";
  }
};
