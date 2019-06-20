/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function reveal(myDIV) {
   console.log(myDIV)
   var x = document.getElementById(myDIV);
   console.log(x)
   if (x.style.display == "") {
     console.log('got_here')
     x.style.display = "inline-block";
     console.log('got_here2')
   } else {
     x.style.display = "none";
   }
 }
