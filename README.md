
# JavaScript Login/Registration Project for Foodie Online Recipe Finder

## Contents

### Project overview

### Languages

### Existing User Tests

### Project Structure

### Functionality

## Project overview

The aim of this project was to put in place a create a website that is interactive for users. 

The project provides interactivity in the form of animations using javascript, a parallax design,  image galleries that users can click through and a login and registration form to capture data from the user and test it. 

## Languages

- JavaScript
- HTML5
- CSS3

## Existing user sample for testing purposes

username: Misspiggy
password: 1Lovekermit!

## Project structure

**Registration Page:**

- register.html
- register.js
- register.scss

**Login Page:**

- login.html
- login.js
- login.scss

**Homepage**

- index.html
- script.js
- style.scss

**Homepage after login:**

- homepage.html
- homepage.js
- homepage.css
- image_carousel.scss
- home.js

## Functionality

A collection of regular expression variables have been created for testing purposes:

- Regular expression for required username format (between 5-20 characters and contain no spaces)

/^[\w\d\_][^\s]{5,20}$/

- Regular expression for required password format (between 6-20 characters at least 1 capital letter, 1 special character and 1 number)

/^(?=._[A-Z])(?=._[0-9])(?=.\*[\W]).{6,20}$/

- Regular expression for required first name & last name format (between 1-22 characters, accepting of Diacritics (i.e.éó) and dashes for double barrel names(i.e. Emily-Mae) with no numbers allowed)

/([a-zA-Z\-]|[à-ü]|[À-Ü])([^0-9]){1,23}/

- Regular expression for email to ensure email capture is in the correct format

/^([a-zA-Z0-9\.-])+@([a-zA-Z0-9]+).([a-z]{2,10}).([a-z]{2,8})?$/

### Signup

**Code Break down**

Lines 1-4: Declaration of regular expressions for required data format.

Lines 5-9: Array of error messages to be displayed when a data test fails.

Lines 12-15: Creates a modal window with a link to login.html, the link appears once all validation has completed and returned true. Its broken down as follows;

The modal and trigger variable are assigned values using query selector method.
An arrow function is defined (toggleModal) which toggles the "show-login" class on the modal element when called. Its called in the last else if statement if all data has passed the conditions beforehand.

Lines 18-38:
A btn variable is set to capture the submit button on the registration form. An event listener function is then used to 'listen' for when the user 'submits' their data.
Once called a function tests the data and returns either an error message or displays the login link. Its broken down as follows:

the errorMes variable captures an empty paragraph on the html page, its used to insert a message from the array declared on lines 5-9. The signUpIds variable is assigned the elements with the class signup-input, they are stored in a node list. Next testing variables are delcared for each validation check that needs to be completed. For example:

const fNameTest = flNameRegex.test(signUpIds[0].value);

The test variable uses the test method and parses the the first item from the node list stored in the signUpIds. .value is used to capture the data thats been input by the user. The variable will either return true (the test was passed) or false(the data format did not meet the requirements set by the regular expression.)

Five variables are set to test the First name, Last name, Username, Password and email input respectively and return a true or false value.

Finally the conditions are set and if a condition is not met the selected error message is parsed to the empty paragraph element in the html file and displayed to the user. If all conditions are met the toggleModal function is called and executed.

The conditions are as follows: if the fNameTest or lNameTest is false display error message 1, else if the emailTest is false return error message 2, else if createUNameTest is false return error message 3, else if createPassTest is false return error message 4, else dislay the login link.

### Login

**Code Break down**

Lines 2-5: Declaration of regular expressions for required data format.

Lines 8-11: Array of error messages to be displayed when a data test fails.

Lines 16-42: The same logic is used as in the signup form. An event listener is used to 'listen' for when the user 'submits' their data, then a function tests the data captured in the ids variable. The outcomes are different dependant on the test result, if all tests are passed the user is re-directed to the logged in homepage. If tests fail error messages again will display to inform the user of the error and indicate how they can fix it. Lines 28- 32 set conditions of whether the heading element should be displayed, if there is an error message then the heading should be hidden so there is space for the error message to be displayed.

### Animation 

**Code Break down**

line 3: Defining variable of section to be animated. 
line 4: Object containing key/value pairs to be used in call-back function. 

line 8: Creation of new Intersection Observer API and call-back function with two parameters set. 

line 8-25: Call-back function where each element in the animation variable is subjected to a forEach loop. If the element is within the specified viewport it is set a new class called 'appear'. Upon designation of class CSS styling is then enacted upon the elements with their new classes (this CSS styling is keyframes and animation declarations). If the observer is not intersecting (not within the viewport) the function returns and moves to next element in animation variable. The options object is utilised to specify to the API that the intersection of elements should not start until the user has scrolled 400px into the viewport. As there are multiple elements that will be animated the threshold has been set to 0 for convenience and the rootmargin has been applied instead. 
lines 23-25 specify what needs to be observed.

### Image Carousel 

line 29- 32: Selection of elements from the DOM to be used in the utilization of making the carousel functional. 

line 34: Defining the total width of the carousel div that contains all the elements for the image gallery. 

line 35-36: using get computed style method to return all CSS properties of the card element (needed for working out the margin of the cards). Margin right value is then parsed from a string to an integer to be used in calculating the translation width of the carousel.

line 38: returning the total amount of cards in the carousel. 

line 40: initialization of counter for loop. 
line 41-52: calculation of total translation across X axis for carousel to reach the end and calculation for how much the carousel has to translate on each click. 

breakdown of calculation: 
(totalCards/4) *carouselWidth+marginInt*(totalCards/ 4) – carouselWidth - marginInt

•	Dividing the total cards by how many will be displayed at one time (totalCards / 4) this gives two groups of cards.
•	Then the result is multiplied by the carousel width which gives the total width required to display all the cards * carouselWidth.
•	Then the margin is multiplied by the total amount of cards that will be displayed in their groups (see step 1) + marginInt * (totalCards / 4). This gives total space required for margins.  
•	Finally, the carousel width and the margin are subtracted from the total carouselWidth - marginInt this ensure that the when the last rotation of cards is displayed there is no uneven gap between the last card and the right side of the carousel. 

line 58-63: event listener function set with conditions: if variable i is not equal to 0 then increment the addition of carousel width and the margin then assign the i variable to the css property translate x. 

line 65-70: in contrast of the left button event listener the right button event listener works opositely, subtracting and then assigning the translate x property using the i variable.
