let form = document.querySelector("#forms");
let firstName = document.forms[0][1];
let lastName = document.forms[0][2];
let age = document.forms[0][3];
let email = document.forms[0][4];
let address = document.forms[0][5];
let submitBtn = document.forms[0][6];
let resetBtn = document.forms[0][7];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (const ele of document.forms[0]) {
    if (ele.value) {
      let smallEle = ele.nextElementSibling;
      if (smallEle.tagName === "SMALL") {
        smallEle.className = "success";
        smallEle.textContent = "Success";
      }
    } else {
      let smallEle = ele.nextElementSibling;
      console.log(smallEle);
      if (smallEle?.tagName === "SMALL") {
        smallEle.className = "error";
        smallEle.textContent = "Error";
      }
    }
  }
});
clearBtn.addEventListener("click", () => {
  window.location.reload();
});


// form.addEventListener("submit", (e) => {...});: This code adds an event listener to the form element for the "submit" event.
//  When the form is submitted (either by clicking a submit button or pressing Enter), the specified callback function is executed.







// e.preventDefault();: This line prevents the default behavior of form submission, which would cause the page to reload. 
// Instead, the JavaScript code will handle the form submission and validation.









// for (const ele of document.forms[0]) {...}: This loop iterates through all elements within the first form (document.forms[0]), which includes all the form fields and buttons.

// if (ele.value) {...}: This condition checks if the value of the form element is not empty.



// let smallEle = ele.nextElementSibling;: This line gets the next sibling element of the form element. 

// This is likely used to target the <small> elements that are used to display validation messages.


// smallEle.className = "success";: This line sets the CSS class of the <small> element to "success".

//  This could be used to style the element with a green color to indicate success.





// smallEle.textContent = "Success";: This line sets the text content of the <small> element to "Success". 
// This could be used to display a success message next to the form field.



// The else block follows a similar structure but with the class and text content set for the case when the form field is empty. 
// The class "error" is applied, indicating an error or validation issue.

// Code Block 2: Event Listener for Clear Button

// javascript
// Copy code
// clearBtn.addEventListener("click", () => {
//   window.location.reload();
// });
// clearBtn.addEventListener("click", () => {...});: This code adds an event listener to a button (presumably with the id clearBtn) for the "click" event. When the button is clicked, the provided callback function is executed.

// window.location.reload();: This line reloads the current page. Presumably, this is intended to reset the form and clear any validation messages.

// In summary, the code handles form submission and validation by checking the values of form fields and displaying success or error messages using <small> elements. 
// It prevents the default form submission behavior, allowing JavaScript to handle the validation. Additionally, a button (with the id clearBtn) is provided to reload the page, possibly as a way to reset the form.





