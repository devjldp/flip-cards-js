const cards = document.querySelectorAll('.card__inner');

for(let i in cards){
cards[i].addEventListener('click', () =>{
  cards[i].classList.toggle('is-flipped')
})
}