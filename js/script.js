const card = document.getElementById('card_rotad');

function openRegister(){
  card.style.transform = "rotateY(-180deg)";
}
function openLogin(){
  card.style.transform = "rotateY(0deg)";
}

let body = document.getElementsByTagName('body')
body.addEventListner('sumbit', function(e){
  e.preventDefault()
})







