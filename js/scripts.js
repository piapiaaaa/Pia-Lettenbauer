function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}

$(document).ready(function() {
  $('#nav-icon1').click(function() {
    $(this).toggleClass('open');
  });
});
