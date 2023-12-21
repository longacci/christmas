window.addEventListener('load',() => {
    const button = document.querySelector(".button");
    const title = document.querySelector(".title");
    const star = document.querySelector(".star");
    const tree = document.querySelector(".tree");
    const image = document.querySelector(".box_image");
    const banner = document.querySelector(".banner");
    const audio = document.createElement("AUDIO");
    audio.src = `./audio.mp3`;
    banner.insertAdjacentElement("beforebegin",audio);
    audio.autoplay = true;
    button.addEventListener("click",()=> {
        button.classList.add("hidden_button");
        title.classList.add("hidden_title");
        star.classList.remove("hidden_star");
        tree.classList.remove("hidden_tree");
        image.classList.remove("hidden_image");
    })
})