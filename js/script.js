


  let closeBtn = document.getElementById('close');
  let loginLink = document.getElementById('showLogin');
  let closeLogin = document.getElementById('closeLogin')

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('popupForm').style.display = 'block';
    }, 3000); // optional delay
  });

  
  // "Login here" link shows login form, hides sign-up
  loginLink.addEventListener('click', function (e) {
    e.preventDefault(); // prevents page from reloading
    document.getElementById('popupForm').style.display = 'none';
    document.getElementById('popupFormLogin').style.display = 'block';
  });
  
  
  // Close button hides sign-up form
  closeBtn.addEventListener('click', () => {
    document.getElementById('popupForm').style.display = 'none';
  });
  
  closeLogin.addEventListener('click',()=>{
    
    document.getElementById('popupFormLogin').style.display = 'none';
  })