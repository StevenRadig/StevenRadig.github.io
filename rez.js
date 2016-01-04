console.log("script is linked and runnin' cap'n!");

var skills = [
  ["html", 80],
  ["css", 90],
  ["js", 57],
  ["php", 41],
  ["ruby", 14],
  ["java", 26],
]

/*function toRad(degrees) {
  var factor = (Math.PI / 180);
  var north = (Math.PI / 2);
  return degrees * factor - north;
}

function percent(decimal) {
  var degrees = decimal * 360;
  return toRad(degrees);
}*/

function toRad(degrees) {
  var factor = (Math.PI / 180);
  var north = (Math.PI / 2);
  return degrees * factor - north;
}
function percent(decimal) {
  var degrees = (decimal * 360)/100;
  return toRad(degrees);
}

function makeDonut(target, pct) {
  target = target.getContext('2d');
  target.beginPath();
  target.arc(50, 50, 45, percent(0), percent(pct));
  target.lineWidth = 10;
  target.strokeStyle = "#2c3e50";
  target.stroke();
  target.font = "24px sans-serif";
  target.textBaseline = "middle";
  target.textAlign = 'center';
  target.fillStyle = "#2c3e50";
  target.fillText(pct.toFixed(0)+"%", 100*.5, 50);
  target.closePath();
}

function populateCanvases() {
  for(i=0; i<skills.length; i++) {
    var target = document.getElementById(skills[i][0]);
    var num = skills[i][1];

    makeDonut(target, num);
  }
}

populateCanvases();