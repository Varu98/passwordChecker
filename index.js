//  Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.

const input = document.querySelector("#password");
const btn = document.querySelector("#btn");
const errorDiv = document.querySelector(".errorDiv");

btn.addEventListener("click", checkInputField);

// input.addEventListener("change", checkWiring);

function checkInputField() {
  const inputValue = input.value;
  errorDiv.style.backgroundColor = "red";

  if (input.value === "") {
    errorDiv.innerHTML = "Please Enter A Password";
  }
  if (inputValue.length < 9) {
    errorDiv.innerHTML = "Please Enter A Password more than 10 chracthers";
  } else {
    errorDiv.style.backgroundColor = "green";
    errorDiv.innerHTML = `The Password is saved Successfully!!`;
  }
}

function checkWiring() {
  console.log(input.value);
}
