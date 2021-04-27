function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
  var y = document.getElementById("nav-icon1");
  if (y.className === "") {
    y.className += "open";
  } else {
    y.className = "";
  }
}
