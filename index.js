const startNumber = 9
const flipCard = document.querySelector(".flip-card")
const topHalf = flipCard.querySelector(".top")
const bottomHalf = flipCard.querySelector(".bottom")
const topFlip = document.createElement("div")
topFlip.classList.add("bottom-flip")
const bottomFlip = document.createElement("div")
bottomFlip.classList.add("bottom-flip")

top.textContent = startNumber
bottomHalf.textContent = startNumber
flipCard.dataset.currentNumber = startNumber
flipCard.dataset.nextNumber = startNumber + 1

topFlip.addEventListener("animationstart", e => {
 topHalf.textContent = startNumber - 1
})
topFlip.addEventListener("animationend", e => {
  topFlip.remove () 

})
bottomFlip.addEventListener("animationend", e => {
bottomHalf.textContent = startNumber - 1
  bottomFlip.remove () 
})
flipCard.append(topFlip, bottomFlip)