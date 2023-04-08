var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');
var btn5 = document.querySelector('#btn5');

var sect1 = document.querySelector('.sect1');
var sect2 = document.querySelector('.sect2');
var sect3 = document.querySelector('.sect3');
var sect4 = document.querySelector('.sect4');
var sect5 = document.querySelector('.sect5');
var sect6 = document.querySelector('.sect6');


btn1.addEventListener('click', function(event) {
    event.preventDefault();
    sect1.classList.remove('block');
    sect2.classList.add('block');
  });
  
  btn2.addEventListener('click', function(event) {
    event.preventDefault();
    sect2.classList.remove('block');
    sect3.classList.add('block');
  });
  
  btn3.addEventListener('click', function(event) {
    event.preventDefault();
    sect3.classList.remove('block');
    sect4.classList.add('block');
  });

  btn4.addEventListener('click', function(event) {
    event.preventDefault();
    sect4.classList.remove('block');
    sect5.classList.add('block');
  });
  
  btn5.addEventListener('click', function(event) {
    event.preventDefault();
    sect5.classList.remove('block');
    sect6.classList.add('block');
  });
  
  