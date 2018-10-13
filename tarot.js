// declaring the tarotCard array
const tarotCard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(tarotCard[5]);

// fuction returns number atuomaticallly
function pickRandomCard() {
const index = Math.random(); // generating a random number
  const max = 3;
  const min = 0;
  const cardNumber = index * (max - min) + min
  return Math.floor(cardNumber); // Math.floor rounds down
}

function drawCard() {
  console.log(pickRandomCard());
  // const el = document.querySelector(".picked-card");
  // el.innerHTML = pickRandomCard();
  // console.log(el)
  const img = document.querySelector(".picked-card img");
  img.src = `card-${pickRandomCard()}.jpg` // ${} grabs a random card
  const container = document.querySelector(".picked-card");
  container.classList.add("show");
  console.log(img.src);
}

function shuffleCard() {
  const container = document.querySelector(".picked-card")
  container.classList.remove("show");
}

/*
if (index >= 0 && index <= 0.25) {
  console.log(tarotCard[0]);
} else if (index > 0.25 && index <= 0.5) {
  console.log(tarotCard[1]);
} else if (index > 0.5 && index <= 0.75) {
  console.log(tarotCard[2]);
} else if (index > 0.75) {
  console.log(tarotCard[3]);
}
*/
