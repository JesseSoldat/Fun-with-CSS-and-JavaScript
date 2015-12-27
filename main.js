function changeStyle (element, clr) {
 var elem = document.getElementById(element);
 var btn = document.getElementById('btn');

 elem.style.transition = 'all 3.0s linear 0s';
 elem.style.background = clr;
 elem.style.border = '5px solid black';
 elem.style.width = '600px';
 elem.style.height = '300px';
 elem.innerHTML = "<h3>"+"Now you've done it!"+"</h3>";
 elem.style.fontSize = '3em';
 elem.style.fontWeight = 'bolder';


 btn.setAttribute('disabled', true);
}