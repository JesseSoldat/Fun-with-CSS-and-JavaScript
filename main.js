 var elem = document.getElementById('box1');
 var btn = document.getElementById('btn');
 var btn2 = document.getElementById('btn2');
 var text = document.getElementById('firstText');
 var leprechaun = document.getElementById('leprechaun');
 var rainbow = document.getElementById('rainbow');
 var gold = document.getElementById('gold');

function changeStyle () {
 btn.setAttribute('disabled', 'true');

 elem.style.transition = 'all 3.0s linear 0s';
 text.innerHTML = "Now you've done it!";
 elem.style.background = 'red';
 elem.style.border = '5px solid black';
 elem.style.width = '600px';
 elem.style.height = '400px';

 leprechaun.style.transition = 'all 3.0 linear 0s';
 leprechaun.style.opacity = 0.0;
 
 elem.style.fontSize = '3em';
 elem.style.fontWeight = 'bolder';

 btn2.style.opacity = '1';

 setTimeout( function() {
  rainbowAppear();

  btn2.removeAttribute('disabled');

 },3000);
 
}

function changeStyle2() {

  var first = function() {
    var elem2 = document.getElementById('box1');

    btn2.setAttribute('disabled', true);

    elem2.style.transition = 'all 3.0s linear 0s';
    document.getElementById('firstText')
    firstText.innerHTML = "";
    
    elem2.style.background = 'pink';
    elem2.style.border = '2px dashed purple';
    elem2.style.width = '100px';
    elem2.style.height = '50px';

   setTimeout(function(){
      rainbowFade();
    },4000);
    
    setTimeout(function(){
      second();
    },4000);
  };
  first();
}

var rainbowAppear = function () {
rainbow.style.transition = 'opacity 3.0 linear 0s';
rainbow.style.opacity = 1.0;
};

var rainbowFade = function () {
rainbow.style.transition = 'opacity 3.0 linear 0s';
rainbow.style.opacity = 0.0;
};

var second = function() {
  var secondText = document.getElementById('firstText');
  secondText.innerHTML = "I've shrunk!"
  secondText.style.fontSize = '14px';
  secondText.style.top = '20px';
  secondText.style.left = 0;
  secondText.style.fontFamily = 'cursive';
    
  gold.style.transition = 'all 3.0s linear 0s';
  gold.style.opacity = 1.0; 
}

