// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to check all elements with class "container" and add/remove "in-view" class if in/out of viewport
function checkVisibility() {
  const containers = document.querySelectorAll('.container');
  containers.forEach(container => {
    if (isInViewport(container)) {
      container.classList.add('in-view');
    } else {
      container.classList.remove('in-view');
    }
  });
}

// Add event listener for scroll and resize events to check visibility
window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

// Initial check for visibility
checkVisibility();


// const container = document.querySelector('.container');

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       container.classList.add('visible');
//     } else {
//       container.classList.remove('visible');
//     }
//   });
// });

// observer.observe(container);

// document.addEventListener("DOMContentLoaded", function() {
//   const containers = document.querySelectorAll(".container");

//   function checkViewport() {
//       containers.forEach(function(container) {
//           const rect = container.getBoundingClientRect();
//           const windowHeight = window.innerHeight || document.documentElement.clientHeight;

//           // Check if the container is in the viewport
//           if (rect.top >= 0 && rect.bottom <= windowHeight) {
//               container.classList.add("reveal");
//           } else {
//               container.classList.remove("reveal");
//           }
//       });
//   }

//   // Initial check when the page loads
//   checkViewport();

//   // Check again when the window is scrolled
//   window.addEventListener("scroll", checkViewport);
// });




// function openPage(pageName,elmnt,color) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablink");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].style.backgroundColor = "";
//     }
//     document.getElementById(pageName).style.display = "block";
//     elmnt.style.backgroundColor = color;
//   }
  
//   // Get the element with id="defaultOpen" and click on it
//   document.getElementById("defaultOpen").click();