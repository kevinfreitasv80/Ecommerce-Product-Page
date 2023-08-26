let oc = false;
let quantProduct = 0;
const priceProduct = 125;
const plus = document.querySelector(".plus");
const aside = document.querySelector("aside");
const minus = document.querySelector(".minus");
const quantP = document.getElementById("quantP");
const emptyP = document.querySelector(".emptyP");
const addCart = document.getElementById("addCart");
const priceTotal = document.querySelector("strong");
const articleX = document.querySelector(".articleX");
const imgMain = document.querySelectorAll(".imgMain");
const ballonCart = document.querySelector(".ballonCart");
const iconCart = document.querySelector(".quantCart>.cart");
const quantCartSpan = document.getElementById("quantCartSpan");
const quantBallonCart = document.querySelector(".quantBallonCart");
const ballonCartSectionAndButton = document.querySelectorAll(".ballonCart section, .ballonCart button");
const productSelect = document.querySelectorAll(".imgsProduct>section:last-child article");
const imgsProductSelect = document.querySelectorAll(".imgsProduct>section:last-child article img");

const quant = (...val) => val.forEach(element => element.textContent = quantProduct);
const replaceImgMain = (index, imgNum) => imgMain[index].setAttribute("src", `./images/image-product-${imgNum}.jpg`);

plus.addEventListener("click", () => {
    quantProduct++;
    quant(quantP);
});
minus.addEventListener("click", () => {
    if (quantProduct < 1) {
        priceTotal.textContent = 0;
    }else{
        quantProduct--;
        quant(quantP);
    }
});
window.addEventListener("resize", () => {
    quant(quantP);
});
articleX.addEventListener("click", () => {
    aside.style.display = "none";
});
imgMain[0].addEventListener("click", () => {
    aside.style.display = "block";
});
addCart.addEventListener("click", () => {
    if (quantProduct > 0) {
        quantCartSpan.style.display = "block";
        emptyP.style.display = "none";
        for (let i = 0; i < ballonCartSectionAndButton.length; i++) {
            switch (i) {
                case 0:
                    ballonCartSectionAndButton[i].style.display = "flex";
                    break;
                case 1:
                    debugger
                    ballonCartSectionAndButton[i].style.display = "block";
                    break;
            }
        }
        quant(quantBallonCart, quantCartSpan);
        priceTotal.textContent = (priceProduct * quantProduct).toFixed(2);
    }
});
iconCart.addEventListener("click", () => {
    !oc ? ballonCart.style.display = "block" : ballonCart.style.display = "none";
    oc = !oc;
});
for (let i = 0; i < productSelect.length; i++) {
    productSelect[i].addEventListener("click", function(){
        for (let j = 0; j < productSelect.length; j++) {
            imgsProductSelect[j].classList[0] === "selected" ? imgsProductSelect[j].classList.remove("selected") : undefined;
        }
        if (i < 4) {
            switch (i) {
                case 0:
                    replaceImgMain(0, 1);
                    imgsProductSelect[i].classList.add("selected");
                    break;
                case 1:
                    replaceImgMain(0, 2);
                    imgsProductSelect[i].classList.add("selected");
                    break;
                case 2:
                    replaceImgMain(0, 3);
                    imgsProductSelect[i].classList.add("selected");
                    break;
                case 3:
                    replaceImgMain(0, 4);
                    imgsProductSelect[i].classList.add("selected");
                    break;
            }
        }else{
            switch (i) {
                case 4:
                    replaceImgMain(1, 1);
                    imgsProductSelect[i].classList.add("selected");
                    break;
                case 5:
                    replaceImgMain(1, 2);
                    imgsProductSelect[i].classList.add("selected");
                    break;
                case 6:
                    replaceImgMain(1, 3);
                    imgsProductSelect[i].classList.add("selected");
                    break;
                case 7:
                    replaceImgMain(1, 4);
                    imgsProductSelect[i].classList.add("selected");
                    break;
            }
        }
    });
}