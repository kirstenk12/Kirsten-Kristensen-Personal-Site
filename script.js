//on click example
let clickCounter = 0;
document.getElementById("clickExample").onclick = function() {clickEx()};
function clickEx()
{
  clickCounter++;
  let displaying = " You Clicked Me: " + clickCounter + " time(s)";
 document.getElementById("clickExample").innerHTML = displaying;
}

//mouse over and mouse out example
document.getElementById('mouseOverExample').onmouseover = function() {mouseOverEx()};
function mouseOverEx()
{
  document.getElementById('mouseOverExample').style.fontSize="2em";
}
document.getElementById('mouseOverExample').onmouseout = function() {mouseOutEx()};
function mouseOutEx()
{
  document.getElementById('mouseOverExample').style.fontSize="1.5em";
}

document.getElementById('dialogExample').onclick = function() {dialogEx()};
function dialogEx()
{
  let name = prompt("Please enter your name: ");
  let show = "Hello " + name;
  alert(show);
}


document.getElementById('randomExample').onclick = function() {randomEx()};
function randomEx()
{
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let color = "rgb(" + r + "," + g + "," + b + ")";
  document.getElementById('randomExampleText').style.color=color;
}
