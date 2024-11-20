   // Select all elements with the class 'box4'
   document.querySelectorAll('.box4').forEach(box => {
    // Add a click event listener to each 'box4' element
    box.addEventListener('click', () => {
        // Redirect to the new page
        window.location.href = 'login.html';
    });
})