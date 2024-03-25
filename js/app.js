const nextImg = document.getElementById("icon-next");
const prevImg = document.getElementById("icon-prev");
function changeByJohn(newSRC){
    const tanyaImg = document.getElementById("img-tanya");
    tanyaImg.src = newSRC;
    const johnText = document.querySelector('.testimonial-text');
    const johnAuthor = document.querySelector(".testimonial-author");
    const johnPosition = document.querySelector(".testimonial-position");
    johnText.textContent = object.JohnMessage;
    johnAuthor.textContent = object.JohnAuthor;
    johnPosition.textContent = object.JohnPosition;
}
function changeByTanya(newSRC){
    const tanyaImg = document.getElementById("img-tanya");
    tanyaImg.src = newSRC;
    const johnText = document.querySelector('.testimonial-text');
    const johnAuthor = document.querySelector(".testimonial-author");
    const johnPosition = document.querySelector(".testimonial-position");
    johnText.textContent = object.TanyaMessage;
    johnAuthor.textContent = object.TanyaAuthor;
    johnPosition.textContent = object.TanyaPosition;
}
const object = {
        TanyaMessage: "“La programmation m'intéressait depuis un certain temps mais je n’avais jamais sauté le pas. Ce cours a été une révélation pour moi. Il m’a permis d’obtenir le job de mes rêves.”",
        TanyaAuthor: "Tanya Sinclair",
        TanyaPosition: "UX Enginner", 
        JohnMessage: "“Si vous souhaitez poser les meilleures bases possibles, je vous recommande de suivre ce cours. Il m’a aidé à prendre confiance en moi et à devenir un meilleur développeur.”",
        JohnAuthor: "John Tarkpor",
        JohnPosition: "Junior Front-end Developer",
    }
nextImg.addEventListener("click", () => {
    changeByJohn('./images/image-john.jpg')
})
setTimeout( () => {
     changeByJohn('./images/image-john.jpg')
}, 4000)
setTimeout( () => {
    changeByTanya('./images/image-tanya.jpg')
}, 8000)
prevImg.addEventListener('click', () => {
    changeByTanya('./images/image-tanya.jpg')
})