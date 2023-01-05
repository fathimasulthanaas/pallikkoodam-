// function handleSubmit(e) {
//    e.preventDefault();
//    console.log('handleSubmit called'); 
// }


function handleSubmit(e) {
   e.preventDefault();
   console.log(e); 
   // const email = document.forms['login']['email'].value;
   // const password = document.forms['login']['password'].value;
   const email = document.forms.login.email;
   const password = document.forms.login.password;

   const emailValue = email.value;
   const passwordValue = password.value;

   //validate password
   const passwordErrorDisplay = password.nextElementSibling;
   if(passwordValue.length < 6){
      password.style.border = '1px solid red';
      password.nextElementSibling.classList.remove('d-none');
      passwordErrorDisplay.innerHTML += `<li>Password must be atleast 6 characters.</li>`
   }

   if(passwordValue.includes(' ')){
      password.style.border = '1px solid red';
      password.nextElementSibling.classList.remove('d-none');
      passwordErrorDisplay.innerHTML += `<li>Password should not contain any spaces.</li>`
   }
   console.log(email, password);
}