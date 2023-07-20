
    // JavaScript code to change the navbar background color on scroll

    const navbar = document.getElementById("navbar");
    const breakpoint = 100; // The scroll position where the background color should change

    function changeNavbarBackground() {
      if (window.scrollY >= breakpoint) {
        navbar.style.backgroundColor = "#007bff"; // Change the background color here
      } else {
        navbar.style.backgroundColor = "#f8f8f8"; // Reset the background color here
      }
    }

    // Listen for the scroll event and call the function
    window.addEventListener("scroll", changeNavbarBackground);

    $(document).ready(function () {
      $('#icon').click(function () {
        $('ul').toggleClass('show');
      });
    });

  
    
  // Example of hiding/showing columns in the footer for responsiveness
  const windowWidth = window.innerWidth;
  const columns = document.querySelectorAll('.col-md-4');

  if (windowWidth < 768) {
    columns.forEach(column => {
      column.classList.remove('col-md-4');
      column.classList.add('col-sm-6');
    });
  }




  // JavaScript is not required for basic functionality, but you can use it to perform actions based on the selected rating, like submitting the rating to the server.

  // Example JavaScript (using jQuery) to get the selected rating value
  $('input[name="rating"]').on('change', function() {
    const selectedRating = $(this).val();
    console.log('Selected rating:', selectedRating);
    // You can add additional logic here, like sending the rating to the server.
  });

