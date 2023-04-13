// Regular Expressions for validation
const flNameRegex = /([a-zA-Z\-]|[à-ü]|[À-Ü])([^0-9]){1,23}/;
const uNameRegEx = /^[\w\.-]{6,15}$/;
const emailRegEx = /^([\w\.-]+)@([\w]+)\.([a-z]{2,10})\.([a-z]){2,6}?$/;
const passRegEx = /^(?=.*[\w])(?=.*[\W])(?=.*\d).{8,20}$/;

// Error messages
const errorArr = [
  "There was an error in the name field, please only enter letters",
  "Uh-oh, your email address wasn't accepted, please try again",
  "Your username must be at least 6 characters long.",
  "Oops, your password was not accepted. Please use at least one capital letter, number and special character",
];

// event listener function
$(document).ready(function () {
  const btn = $("#signup-submit");
  btn.on("click", function (e) {
    e.preventDefault();

    // selection of error message id to display error message
    //  in case of forms not passing validation
    const errorMes = $("#error-message");

    // returns the user input elements as node list
    const signUpIds = $(".signup-input");

    // tests users input against regex for required format
    const fNameTest = flNameRegex.test(signUpIds.eq(0).val());
    const lNameTest = flNameRegex.test(signUpIds.eq(1).val());
    const createUNameTest = uNameRegEx.test(signUpIds.eq(3).val());
    const emailTest = emailRegEx.test(signUpIds.eq(2).val());
    const createPassTest = passRegEx.test(signUpIds.eq(4).val());

    // conditions for successful submission. depending on the mistake an error
    // message from display is selected.
    if (!fNameTest || !lNameTest) {
      errorMes.html(errorArr[0]);
      errorMes.css("color", "red");
      signUpIds.eq(0).css("border", "1px solid red");
    } else if (!emailTest) {
      errorMes.html(errorArr[1]);
      errorMes.css("color", "red");
      signUpIds.eq(2).css("border", "1px solid red");
    } else if (!createUNameTest) {
      errorMes.html(errorArr[2]);
      errorMes.css("color", "red");
      signUpIds.eq(3).css("border", "1px solid red");
    } else if (!createPassTest) {
      errorMes.html(errorArr[3]);
      errorMes.css("color", "red");
      signUpIds.eq(4).css("border", "1px solid red");
    } else {
      // modal toggle function
      const modal = $(".buttontologin");
      const trigger = $(".submit");
      let toggleModal = (e) => {
        modal.toggleClass("show-login");
        $("nav").hide();
      };
      trigger.on("click", toggleModal);
    }
  });
});
