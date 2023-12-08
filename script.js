
/* this will track the count */
var count = 0;

/* add your event listener here */
var button = document.querySelector('button');
var number = document.querySelector('h2');

button.addEventListener('click', function() {
  console.log("+1 clicked");
  count = count + 1;
  number.textContent = count;
});
