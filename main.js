function changeStyle (element, clr) {
 var elem = document.getElementById(element);
 var btn = document.getElementById('btn');

 elem.style.transition = 'background 3.0s linear 0s';
 elem.style.background = clr;

 btn.setAttribute('disabled', true);
}