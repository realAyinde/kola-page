// window.onload = function () {
//   var optionsV = document.getElementsByClassName("options-v")[0];
import "jquery";

var optionsV = document.getElementById("month-options");

  function next() {
    var ul = optionsV.getElementsByTagName("ul")[0];
    var active = ul.getElementsByClassName("active")[0];
    if (active.nextElementSibling) {
      active.className = "option-item";
      active.nextElementSibling.className += " active";
    }
  }

  function previous() {
    var ul = optionsV.getElementsByTagName("ul")[0];
    var active = ul.getElementsByClassName("active")[0];
    if (active.previousElementSibling) {
      active.className = "option-item";
      active.previousElementSibling.className += " active";
    }
  }
$('[to="left"]').click(previous())
$('[to="right"]').click(next())
//   optionsV.querySelector('[to="left"]').onclick = () => {
//       previous()
//     };
    // optionsV.querySelector('[to="right"]').onclick = () => {
    //     next()
    //   };;

  var filterList = document.getElementsByClassName("filter-list")[0];
  var filterItems = filterList.getElementsByClassName("filter-item");

  for (var i = 0; i < filterItems.length; i++) {
    filterItems[i].onclick = () => {
      var current = filterList.getElementsByClassName("selected");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" selected", "");
      }
      this.className += " selected";
    };
  }
// }
