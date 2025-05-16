 window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('popupForm').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
    }, 1000); // 3 seconds
  });

  // Close popup function
//   function closePopup() {
//     document.getElementById('popupForm').style.display = 'none';
//     document.getElementById('overlay').style.display = 'none';
//   }