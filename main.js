document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    document.querySelectorAll(".parallax").forEach((element) => {
        const speed = element.getAttribute("data-speed")
        element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`
    }) 
})


const signinButton = document.getElementById('signinButton')
const signinPage = document.getElementById('signinPage')
const closeIcon = document.getElementById("closeIcon")

signinButton.addEventListener("click", function () {
    signinPage.classList.remove("closeSignin")
    signinPage.classList.add("openSignin")
})

closeIcon.addEventListener("click", function() {
    signinPage.classList.remove("openSignin")
    signinPage.classList.add("closeSignin")
})