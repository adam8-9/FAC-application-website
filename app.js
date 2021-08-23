
let hobbies = document.querySelector(".hobbies")
let interests = document.querySelector(".interests")
let reason = document.querySelector(".reason")
let output = document.querySelector(".output")
let intro = document.querySelector(".intro")
let slideContainer = document.querySelector(".slideContainer")
let journey = document.querySelector(".journey")

let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")


let removeIntro = () => {

    intro.classList.add("hide")
}

let removeHobbies = () => {

    slideContainer.classList.add("hide")
}

let removeJourney = () => {

    journey.classList.add("hide")

}

hobbies.addEventListener("click", (e) => {
    removeIntro()
    removeJourney()
    slideContainer.classList.remove("hide")



})


/*button1.addEventListener("click", (f) => {
    console.log(f, "test")
    currentImage--
    if (currentImage < 0) {
        currentImage = 3
    }
    output.style.backgroundImage = `url(${images[currentImage]})`
})
button2.addEventListener("click", (f) => {
    console.log(f, "test")
    currentImage++
    if (currentImage > 3) {
        currentImage = 0
    }
    output.style.backgroundImage = `url(${images[currentImage]})`
})*/

interests.addEventListener("click", (e) => {
    removeIntro()
    removeHobbies()

    journey.classList.remove("hide")


})

reason.addEventListener("click", (e) => {


})




//window.onload = slideShow()*/