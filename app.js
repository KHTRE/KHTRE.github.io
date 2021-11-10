'use strict';

// function clickHandler() {
//   alert("something");
// }


function isEmpty(str){
  return (str == null) || (str.length == 0);
 }

function isEmail() {
  resultPicture.innerHTML = '';

  // let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let hair = document.getElementById("hair").value;
  let body = document.getElementById("body").value;
  let kindOfCat = document.getElementById("kindOfCat");
  // let re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i; 

  // if (re.test(str)) status.innerHTML = "Адрес правильный";
  //   else status.innerHTML = "Адрес неверный";
  // if(isEmpty(str)) status.innerHTML = `Поле пустое + ${str1}`;

  if (name.length === 0) {
    kindOfCat.innerHTML = `Ты безимянный ${hair.toLowerCase()} ${body.toLowerCase()} кот (или кошка). Котей(ка) без имени, как же так?(((`;
  } else {
    kindOfCat.innerHTML = `Ты ${hair.toLowerCase()} ${body.toLowerCase()} кот (или кошка) по имени ${name}.`;
  }
  
  if (hair === 'Радужный' && body === 'подтянутый') {
    resultPicture.innerHTML = document.getElementById('pic1').innerHTML;
  }

 }



// ТУТ ИДЕТ ТЕСТ ГАЛЕРЕИ


let a = 1;

function test_next() {
  current_picture.innerHTML = '';
  a++;

  if (a === 7) {
    a = 1;
  } 
    current_picture.innerHTML = document.getElementById(`pic-test${a}`).innerHTML;
    current_picture_left.innerHTML = document.getElementById(`pic-test${a-1}`).innerHTML;
    current_picture_right.innerHTML = document.getElementById(`pic-test${a+1}`).innerHTML;

}

function test_prev() {
  current_picture.innerHTML = '';
  a--;

  if (a === 0) {
    a = 6;
    
  } 
    current_picture.innerHTML = document.getElementById(`pic-test${a}`).innerHTML;
}