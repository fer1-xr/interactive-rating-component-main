const Card = document.querySelector(".card")
const Submit = document.getElementById("submit")
const Second = document.querySelector(".hidden");
const actualRating = document.getElementById("rating")
const ratings= document.querySelectorAll(".btn")
const rateAgain= document.getElementById("rate-again")




Submit.addEventListener ("click", ()=>{
Second.classList.remove("hidden")
Card.style.display = "none"




rateAgain.addEventListener("click", () => {
    Second.classList.add("hidden")
    Card.style.display = "block"
})

ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRating.innerHTML = rating.innerHTML
    })
  })
})