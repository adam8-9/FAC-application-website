let body = document.querySelector("body")
let heading = document.querySelector("h1")
let backgroundChange = document.querySelector(".background-change")
let arrow = document.querySelector(".arrow")

let hobbies = document.querySelector(".hobbies")
let interests = document.querySelector(".interests")
let reason = document.querySelector(".reason")
let game = document.querySelector(".game")
let score = document.querySelector(".score")

let image1 = document.querySelector("#image1")
let image2 = document.querySelector("#image2")
let image3 = document.querySelector("#image3")
let image4 = document.querySelector("#image4")
let image5 = document.querySelector("#image5")
let image6 = document.querySelector("#image6")

let image7 = document.querySelector("#image7")
let image8 = document.querySelector("#image8")
let image9 = document.querySelector("#image9")
let image10 = document.querySelector("#image10")
let image11 = document.querySelector("#image11")
let image12 = document.querySelector("#image12")

//let allImages = document.querySelector(".gifContainer div")


let clickCount = 0;
let firstImage = [,];
let secImage = [,];
let scorekeeper = 0;
function clickCheck(e) {
    clickCount++;
    console.log(e)
    let image = e.target;
    if (clickCount === 1) {
        //console.log(clickCount)
        firstImage[0] = image.classList.value;
        firstImage[1] = image;
        console.log(firstImage)
        image.classList.toggle("gif")

    } if (clickCount === 2) {
        // console.log(clickCount)
        secImage[0] = image.classList.value;
        secImage[1] = image;
        //  console.log(secImage)
        image.classList.toggle("gif")
        clickCount = "";

        if (firstImage[0] === secImage[0]) {
            // console.log("matched")
            setTimeout(() => {
                prompt("u matched");
            }, 100)
            scorekeeper++;
            score.innerText = `SCORE:${scorekeeper}`
        } else {
            setTimeout(() => {
                prompt("u didnt match");
                firstImage[1].classList.remove("gif")
                secImage[1].classList.remove("gif")
            }, 100)

        }
    }
}




let output = document.querySelector(".output")
let intro = document.querySelector(".intro")
let slideContainer = document.querySelector(".slideContainer")
let journey = document.querySelector(".journey")
let gifContainer = document.querySelector(".gifContainer")

let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let footerImages = document.querySelectorAll("footer img")
let footer = document.querySelector("footer")


backgroundChange.addEventListener("click", (e) => {
    // console.log(body.style.backgroundImage)
    body.classList.toggle("chase")
    arrow.classList.toggle("flip")
    heading.classList.toggle("headingBlue")
    hobbies.classList.toggle("menuBlue")
    interests.classList.toggle("menuBlue")
    reason.classList.toggle("menuBlue")
    game.classList.toggle("menuBlue")
    footer.classList.toggle("footerBlue")
    //footerImages.classList.toggle("footerBlue")
})

let removeIntro = () => {
    intro.classList.add("hide")
}

let removeHobbies = () => {
    slideContainer.classList.add("hide")
}

let removeJourney = () => {
    journey.classList.add("hide")

}

let removeGame = () => {
    gifContainer.classList.add("hide")
    score.classList.add("hide")
    score.innerText = `Score:`
    image1.classList.remove("gif")
    image2.classList.remove("gif")
    image3.classList.remove("gif")
    image4.classList.remove("gif")
    image5.classList.remove("gif")
    image6.classList.remove("gif")
    image7.classList.remove("gif")
    image8.classList.remove("gif")
    image9.classList.remove("gif")
    image10.classList.remove("gif")
    image11.classList.remove("gif")
    image12.classList.remove("gif")

}

hobbies.addEventListener("click", (e) => {
    removeIntro()
    removeJourney()
    removeGame()
    slideContainer.classList.remove("hide")



})


interests.addEventListener("click", (e) => {
    removeIntro()
    removeHobbies()
    removeGame()
    journey.classList.remove("hide")


})

reason.addEventListener("click", (e) => {


})

game.addEventListener("click", (e) => {
    removeIntro()
    removeHobbies()
    removeJourney()
    gifContainer.classList.remove("hide")
    score.classList.remove("hide")
})


//window.onload = slideShow()*/


image1.addEventListener("click", clickCheck)
image2.addEventListener("click", clickCheck)
image3.addEventListener("click", clickCheck)
image4.addEventListener("click", clickCheck)
image5.addEventListener("click", clickCheck)
image6.addEventListener("click", clickCheck)
image7.addEventListener("click", clickCheck)
image8.addEventListener("click", clickCheck)
image9.addEventListener("click", clickCheck)
image10.addEventListener("click", clickCheck)
image11.addEventListener("click", clickCheck)
image12.addEventListener("click", clickCheck)
