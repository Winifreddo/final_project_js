// Regular Expressions for validation

const flNameRegex = /([a-zA-Z]|[à-ü]|[À-Ü])([^0-9]){1,20}/;
const uNameRegEx = /^[\w\.-]{6,15}$/;
const emailRegEx = /^([\w\.-]+)@([\w]+)\.([a-z]{2,10})\.([a-z]){2,6}?$/;
const passRegEx = /^(?=.*[\w])(?=.*[\W])(?=.*\d).{8,20}$/;

// Error messages
const errorArr = [
  "Sorry, we didn't recognise that user. Please try again",
  "Oops, we didn't recognise that password. Please try again",
  "There was an error in the name field, please only enter letters",
];

// event listener function
$("#login-submit").click(function (e) {
  e.preventDefault();

  // returns the user input elements as node list
  const ids = $(".login-input");

  // selection of error message id to display error message
  //  in case of forms not passing validation
  const errorMes = $("#error-message");

  // tests users input against regex for required format
  const uNameTest = uNameRegEx.test(ids.eq(0).val());
  const passTest = passRegEx.test(ids.eq(1).val());

  // condition for heading to display if error message not displayed
  //  and hide if error message is displayed
  const heading = $("#login-heading");
  if (heading.css("display") === "none") {
    heading.css("display", "block");
  } else {
    heading.css("display", "none");
  }

  // conditions for successful submission. depending on the mistake an error
  // message from display is selected.
  if (!uNameTest) {
    errorMes.html(errorArr[0]);
    errorMes.css("color", "red");
    ids.eq(0).css("border", "1px solid red");
  } else if (!passTest) {
    errorMes.html(errorArr[1]);
    errorMes.css("color", "red");
    ids.eq(1).css("border", "1px solid red");
  } else if (uNameTest && passTest) {
    window.location.href = "index.html";
  }
});
