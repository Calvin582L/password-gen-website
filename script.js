document.getElementById("myButton").onclick = function(){
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower_letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()?";
  const list_of_lower_letters = lower_letters.split("");
  const list_of_letters = letters.split("");
  const list_of_numbers = numbers.split("");
  const list_of_symbols = symbols.split("");
  let password = [];
  var myLength = document.getElementById("myText").value;
  var password_length = myLength - 1;

  for (x = 0; x <= password_length; x++){
  let num = Math.floor(Math.random() * 4);
  if (num == 0){
    password.push(list_of_letters[Math.floor(Math.random() * 26)])
  }
  else if (num == 1){
    password.push(list_of_numbers[Math.floor(Math.random() * 10)])
  }
  else if (num == 2){
    password.push(list_of_symbols[Math.floor(Math.random() * 11)])
  }

  else if (num == 3){
    password.push(list_of_lower_letters[Math.floor(Math.random() * 26)])
  }
  }
  console.log(password.join(""));
  password = password.join("");
  document.getElementById('pw').innerHTML = "Your password: " + password;
  if (password == ""){
    document.getElementById('pw').innerHTML = "Enter a valid number!";
  }
}



