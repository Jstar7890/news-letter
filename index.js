function validate(){
  const inputElement =  document.querySelector('.js-input');
const inputValue = inputElement.value;
const buttonElement = document.querySelector('.js-submit-button');
buttonElement.addEventListener('click',() => {
  const validEmail = /^[a-zA-Z0-9.+-_%]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(validEmail.test(inputValue)){
    window.document.body.innerHTML = '';
    success(inputValue);
  }
  else{
    inputElement.classList.remove('valid-email'); // Remove the class if email is not valid
inputElement.classList.add('failed');
document.querySelector('.fail').classList.add('fal');
  }
})
}
function dismiss(){
    location.reload();
}
function success (emailAddress){
  window.document.body.innerHTML += 
  `
  <div class="out">
  <div class="success-card">
  <img src="assets/images/icon-success.svg" alt="">
  <h1>Thanks for subscribing!</h1>
  <p>
    A confirmation email has been sent to <span>${emailAddress}</span>
    Please open it and click the button inside to confirm your subscription.
  </p>
  <button class="dismiss" onclick="dismiss()">
    Dismiss message
  </button>
  </div>
  </div>
  `
}