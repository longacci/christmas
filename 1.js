window.addEventListener('DOMContentLoaded',() => {
    const button = document.querySelector(".button");
    const title = document.querySelector(".title");
    const star = document.querySelector(".star");
    const tree = document.querySelector(".tree");
    const image = document.querySelector(".box_image");
    button.addEventListener("click",()=> {
        button.classList.add("hidden_button");
        title.classList.add("hidden_title");
        star.classList.remove("hidden_star");
        tree.classList.remove("hidden_tree");
        image.classList.remove("hidden_image");
    })
})