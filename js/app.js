const ICONNEXT = "icon-next";
const ICONPREV = "icon-prev";
const nextImg = document.getElementById(ICONNEXT);
const prevImg = document.getElementById(ICONPREV);
const textElement = document.querySelector('.testimonial-text');
const authorElement = document.querySelector(".testimonial-author");
const positionElement = document.querySelector(".testimonial-position");
const imageElement = document.querySelector("#img")

const testimonials = [
    {
    imgUrl: "./images/image-tanya.jpg",
    alt: "Tanya Sinclar - UX Engineer",
    message: "“La programmation m'intéressait depuis un certain temps mais je n’avais jamais sauté le pas. Ce cours a été une révélation pour moi. Il m’a permis d’obtenir le job de mes rêves.”",
    author: "Tanya Sinclair",
    position: "UX Enginner", 
    },
    {
    imgUrl: "./images/image-john.jpg",
    alt: "John Tarkpor - Junior Front-end Developer",
    message: "“Si vous souhaitez poser les meilleures bases possibles, je vous recommande de suivre ce cours. Il m’a aidé à prendre confiance en moi et à devenir un meilleur développeur.”",
    author: "John Tarkpor",
    position: "Junior Front-end Developer"
    },
    {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flat_Coated_Retriever_-_black.jpg",
    alt: "Good Dog",
    message: "“JE suis content d'être bon chien”",
    author: "Luca",
    position: "Chien de chasse", 
        },
        {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/Calico_cat_with_long_hair.jpg",
    alt: "Good cat",
    message: "“Je suis content d'être un chat”",
    author: "Luca",
    position: "Dormeur"
        }
];
let index = 0;

function changeContent(e){
    let action;

    console.log(e);
    if((e instanceof KeyboardEvent && e.key === "ArrowLeft") 
    || (e instanceof PointerEvent && e.target.id === ICONPREV)){
        action = "prev"
        console.log(action)
    }
    if((typeof e === "KeyboardEvent" && e.key === "ArrowRight") 
     || (typeof e === "PointerEvent" && e.target.id === ICONNEXT)){
        action = "next"
        console.log(action);
    }
    if(action === "next"){
        console.log(action);
        if(index === testimonials.length-1){
            index = 0;
        } else {
            index ++;
        }
    } else if (action === "prev") {
        console.log(action)
        if(index === 0){
            index = testimonials.length - 1;
        } else {
            index --;
        } 
    }

    const testimonial = testimonials[index];
    textElement.textContent = testimonial.message;
    authorElement.textContent = testimonial.author;
    positionElement.textContent = testimonial.position;
    imageElement.setAttribute("src", testimonial.imgUrl);
}

nextImg.addEventListener("click", changeContent)  
prevImg.addEventListener('click', changeContent)
window.addEventListener("keydown", changeContent)