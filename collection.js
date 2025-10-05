var search = document.getElementById("search");
var productlist = document.querySelectorAll(".products-box");

search.addEventListener("keyup", function (event) {
  var enteredValue = event.target.value.toUpperCase();

  for (var i = 0; i < productlist.length; i++) {
    var productName = productlist[i]
      .querySelector("p")
      .textContent.toUpperCase();

    if (productName.indexOf(enteredValue) < 0) {
      productlist[i].style.display = "none";
    } else {
      productlist[i].style.display = "block"; // or "inline-block"/"flex"
    }
  }
});
