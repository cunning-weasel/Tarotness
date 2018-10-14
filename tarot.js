// declaring the tarotCard array
const tarotCardDesc = [{
  src: "card-0.jpg",
  desc: "queen of cups",
},
{
  src: "card-1.jpg",
  desc: "the fool",
  },
{
  src: "card-2.jpg",
  desc: "the star",
  },
{
  src: "card-3.jpg",
  desc: "the hangman",
} ];
// console.log(tarotCard[5]);

// fuction returns number atuomaticallly
function pickRandomCard1() {
const index = Math.random(); // generating a random number
  const max = 3;
  const min = 0;
  const cardNumber = index * (max - min) + min
  return Math.floor(cardNumber); // Math.floor rounds down
}

// const pickedRandomCard = pickRandomCard1();

function drawCard() {
  console.log(pickRandomCard1());
  const pickRandomCard = pickRandomCard1();
  // const el = document.querySelector(".picked-card");
  // el.innerHTML = pickRandomCard();
  // console.log(el)
  const img = document.querySelector(".picked-card img");
  img.src = `card-${pickRandomCard}.jpg` // ${} grabs a random card with the 'card' prefix
  const container = document.querySelector(".picked-card");
  container.classList.add("show");
  console.log(img.src);

  const cardDescription = document.querySelector(".card-description");
  cardDescription.innerHTML = tarotCardDesc[pickRandomCard].desc; // it will pick random card but show accompanying description
  console.log(cardDescription);

  const hide = document.querySelector(".card-description");
  hide.classList.remove("hide");
}

function shuffleCard() {
  const container = document.querySelector(".picked-card")
  container.classList.remove("show");

  const hide = document.querySelector(".card-description")
  hide.classList.add("hide");
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
