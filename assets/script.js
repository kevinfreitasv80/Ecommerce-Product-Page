/* Values */
let oc = false;
let ocMenu = false;
let currentImg = 1;
let quantProduct = 0;
const priceProduct = 125;

/* DOM */
const nav = document.querySelector("nav");
const plus = document.querySelector(".plus");
const menu = document.querySelector(".menu");
const aside = document.querySelector("aside");
const menuX = document.querySelector(".menuX");
const minus = document.querySelector(".minus");
const left = document.querySelectorAll(".left");
const quantP = document.getElementById("quantP");
const emptyP = document.querySelector(".emptyP");
const right = document.querySelectorAll(".right");
const addCart = document.getElementById("addCart");
const priceTotal = document.querySelector("strong");
const articleX = document.querySelector(".articleX");
const imgMain = document.querySelectorAll(".imgMain");
const deleteProduct = document.querySelector(".delete");
const ballonCart = document.querySelector(".ballonCart");
const quantCart = document.querySelector(".quantCart");
const quantCartSpan = document.getElementById("quantCartSpan");
const quantBallonCart = document.querySelector(".quantBallonCart");
const productSelect = document.querySelectorAll(".imgsProduct>section:last-child article");
const imgsProductSelect = document.querySelectorAll(".imgsProduct>section:last-child article img");
const ballonCartSectionAndButton = document.querySelectorAll(".ballonCart section, .ballonCart button");

/* Functions */
const quant = (...val) => val.forEach(element => element.textContent = quantProduct);
const typeDisplay = (val2, ...val) => val.forEach(element => element.style.display = val2);
const replaceImgMain = (index, imgNum) => {
    imgMain[index].setAttribute("src", `./images/image-product-${imgNum}.jpg`);
    currentImg = imgNum;
};
const nextOrBackImg = (val, val1) => {
    for (let element of val) {
        element.addEventListener("click", () => {
            switch (val1) {
                case "minus":
                    currentImg === 1 ? undefined : currentImg--;
                    imgMain[1].setAttribute("src", `./images/image-product-${currentImg}.jpg`);
                    break;
                case "plus":
                    currentImg === 4 ? undefined : currentImg++;
                    imgMain[1].setAttribute("src", `./images/image-product-${currentImg}.jpg`);
                    break;
            }
            for (let elem of imgsProductSelect) elem.classList.remove("selected");
            imgsProductSelect[3 + currentImg].classList.add("selected");
        });
    }
}

/* Events */
window.addEventListener("resize", () => {
    this.innerWidth < 870 ? aside.style.display = "none" : undefined;
    if (this.innerWidth > 870) {
        typeDisplay("none", menu, menuX);
        nav.style.display = "block";
    }else{
        if (!ocMenu) {
            typeDisplay("none", menuX, nav);
            menu.style.display = "block";
        }else{
            typeDisplay("block", menuX, nav);
            menu.style.display = "none";
        }
    }
    quant(quantP);
});
articleX.addEventListener("click", () => aside.style.display = "none");
imgMain[0].addEventListener("click", () => this.innerWidth < 870 ? aside.style.display = "hidden" : aside.style.display = "block");
left[0].addEventListener("click", () => currentImg > 0 && currentImg < 5 ? replaceImgMain(0, currentImg--): undefined);
right[0].addEventListener("click", () => currentImg > 0 && currentImg < 5 ? replaceImgMain(0, currentImg--): undefined);
plus.addEventListener("click", () => {
    quantProduct++;
    quant(quantP);
});
minus.addEventListener("click", () => {
    if (quantProduct > 0) {
        quantProduct--;
        quant(quantP);
    }
});
deleteProduct.addEventListener("click", () => {
    quantProduct = 0;
    quant(quantP, quantCartSpan);
    emptyP.style.display = "block";
    quantCartSpan.style.display = "none";
    for (const [i] of ballonCartSectionAndButton.entries()) ballonCartSectionAndButton[i].style.display = "none";
});
addCart.addEventListener("click", () => {
    if (quantProduct > 0) {
        quantCartSpan.style.display = "block";
        emptyP.style.display = "none";
        for (const [i] of ballonCartSectionAndButton.entries()) i === 0 ? ballonCartSectionAndButton[i].style.display = "flex" : ballonCartSectionAndButton[i].style.display = "block";
        quant(quantBallonCart, quantCartSpan);
        priceTotal.textContent = (priceProduct * quantProduct).toFixed(2);
    }
});
quantCart.addEventListener("click", () => {
    !oc ? ballonCart.style.display = "block" : ballonCart.style.display = "none";
    oc = !oc;
});
menu.addEventListener("click", () => {
    typeDisplay("block", nav, menuX);
    menu.style.display = "none";
    ocMenu = !ocMenu;
});
menuX.addEventListener("click", () => {
    typeDisplay("none", nav, menuX);
    menu.style.display = "block";
    ocMenu = !ocMenu;
});

for (let i = 0; i < productSelect.length; i++) {
    productSelect[i].addEventListener("click", function(){
        for (let [j] of productSelect.entries()) imgsProductSelect[j].classList[0] === "selected" ? imgsProductSelect[j].classList.remove("selected") : undefined;
        i >= 0 && i < 4 ? replaceImgMain(0, i + 1) : replaceImgMain(1, i - 3);
        imgsProductSelect[i].classList.add("selected");
    });
}

nextOrBackImg(left, "minus");
nextOrBackImg(right, "plus");