/*let currentImage = 0;
let time = 2000;
let images = []
images[0] = "basketball.jpg"
images[1] = "boxing.jpg"
images[2] = "skateboarding.jpg"
images[3] = "anime.jpg"

let slideShow = () => {
    output.style.backgroundImage = `url(${images[currentImage]})`

    if (currentImage < images.length - 1) {
        currentImage++
        console.log("increased")
    } else {
        currentImage = 0;
    }

    setTimeout(slideShow, time)

}

hobbies.addEventListener("click", (e) => {
    console.log(e)
    slideShow()

})
*/
let hobbies = document.querySelector(".hobbies")
let interests = document.querySelector(".interests")
let reason = document.querySelector(".reason")
let output = document.querySelector("figure")


//let images = ["basketball.jpg", "boxing.jpg", "skateboarding.jpg", "anime.jpg"]
//let currentImage = 0
let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let HobbiesClick = 0;
let JourneyClick = 0;

hobbies.addEventListener("click", (e) => {
    console.log(e)
    output.innerHTML = " "
    HobbiesClick++;
    button1.classList.toggle("reveal")
    button2.classList.toggle("reveal")
    //output.style.backgroundImage = `url(${images[currentImage]})`

    /* button1.classList.toggle("reveal")
     button2.classList.toggle("reveal")
     output.style.backgroundImage = `url(tumbleWeed.gif)`
     HobbiesClick = 0*/


})


button1.addEventListener("click", (f) => {
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
})

interests.addEventListener("click", (e) => {
    button1.classList.remove("reveal")
    button2.classList.remove("reveal")
    output.style.backgroundImage = `url(WhirlPool.gif)`
    output.innerHTML = `<p class="top">The earliest I can remember of me being fascinated by technology was a tetris game that I played on
    a hand held console when I was around 3 or 4 years old, dont even know how I remember that probably beacuse of the curiosity
     it created of how are these blocks appearing out of thin air and dissapear moments later, or how I couldn't touch them and only move them through the buttons.
     This fascination only grew over time as technology developed throughout the years and allowed us to carry out more complex tasks.</p><p class="bottom">Fast track to 2015-16 I took computer science as one of my GCSE's and made a computer output
     "Hello World" in python, I'm not going to say that's when I fell in love with coding from then on out,
      it was actually much after that when we were assigned to make a game in my last year of A level's, that's when I faced challenges and learned new things
      and the best part was the ecstatic feeling of solving problems even if it took hours or sometimes days!.</p><p>Even though I made a game that was playable I didn't know the fundementals of the programming language I was using at the time(C#) untilbasics of </p>`
})

reason.addEventListener("click", (e) => {
    button1.classList.remove("reveal")
    button2.classList.remove("reveal")
    output.style.backgroundImage = `url(WhirlPool.gif)`
    output.style.backgroundImage.filter = `contrast(50%)`
    output.innerHTML = `<p class="top">The earliest I can remember of me being fascinated by technology was a tetris game that I played on
    a hand held console when I was around 3 or 4 years old, dont even know how I remember that probably beacuse of the curiosity
     it created of how are these blocks appearing out of thin air and dissapear moments later, or how I couldn't touch them and only move them through the buttons.
     This fascination only grew over time as technology developed throughout the years and allowed us to carry out more complex tasks.</p><p class="bottom">Fast track to 2015-16 I took computer science as one of my GCSE's and made a computer output
     "Hello World" in python, I'm not going to say that's when I fell in love with coding from then on out,
      it was actually much after that when we were assigned to make a game in my last year of A level's, that's when I faced challenges and learned new things
      and the best part was the ecstatic feeling of solving problems even if it took hours or sometimes days!.</p>`


})




//window.onload = slideShow()*/