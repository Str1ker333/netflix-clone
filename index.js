const askButtons = Array.from(document.getElementsByClassName("ask-button")) 
const askContainers = Array.from(document.getElementsByClassName("ask-element"))

askContainers.forEach(ask => {
    const button = ask.firstElementChild
    const askText = ask.children[1]

    button.addEventListener("click",() => {
        const icon = button.querySelector("i")

        if (icon.className.includes("gg-math-plus")) {
            icon.classList.replace("gg-math-plus", "gg-close")    
            askText.classList.remove("none")
        } else {
            icon.classList.replace("gg-close", "gg-math-plus")    
            askText.classList.add("none")
        }

    })
})
