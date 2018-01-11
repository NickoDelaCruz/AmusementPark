$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in feet?"));

  if (height > 5) {
    $('#tall').show();
    alert("LETS GO!");
  } else if (height === 5) {
    alert("BARELY MADE IT!");
    $('#tall').show();
  } else {
    $('#short').show();
  }
});
