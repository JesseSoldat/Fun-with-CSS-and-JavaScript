function changeStyle (element, clr) {
 var elem = document.getElementById(element);
 var btn = document.getElementById('btn');
 var btn2 = document.getElementById('btn2');

 btn.setAttribute('disabled', 'true');

 elem.style.transition = 'all 3.0s linear 0s';
 elem.style.background = clr;
 elem.style.border = '5px solid black';
 elem.style.width = '600px';
 elem.style.height = '300px';
 elem.innerHTML = "<h3>"+"Now you've done it!"+"</h3>";
 elem.style.fontSize = '3em';
 elem.style.fontWeight = 'bolder';

 
 btn2.style.opacity = '1';

 setTimeout( function() {
  btn2.removeAttribute('disabled');
 },3000);
 
}

function changeStyle2(element) {
  var elem2 = document.getElementById(element);
  elem2.style.transition = 'all 3.0s linear 0s';
  elem2.style.background = 'pink';
  elem2.style.border = '2px dashed purple';
  elem2.style.width = '100px';
  elem2.style.height = '50px';
  elem2.innerHTML = "<h5>"+"I'm Shrinking!"+"</h5>";
  elem2.style.fontSize = '1em';
  elem2.style.fontWeight = 'normal';
  elem2.style.fontFamily = 'cursive';

  btn2.setAttribute('disabled', true);

}