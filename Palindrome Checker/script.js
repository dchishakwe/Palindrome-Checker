var msgbox = document.querySelector('.msg');

//Even listner(Button Click)
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {

  e.preventDefault();
  let textValue = document.getElementById("name").value;
  const regex = /[^a-z]+/gi;
  let textFormatted = ((textValue.replace(regex, "")).toLowerCase()).split('');

  let textReversed = [...textFormatted].reverse();


  //Conditionals
  if (document.getElementById("name").value =="" ) {

    msgbox.innerHTML = '<h1>No input text</h1>';

  }

  else if (JSON.stringify(textFormatted) == JSON.stringify(textReversed)) {

    msgbox.innerHTML = '<h1>Palindrome</h1>';

  }
   else {

    msgbox.innerHTML = '<h1>Not a palindrome</h1>';

  }

})

//Clear fields(On Input)
document.querySelector('#name').addEventListener('input', (e) => {

  
  e.preventDefault();
  document.querySelector('.msg').innerHTML = "";

});