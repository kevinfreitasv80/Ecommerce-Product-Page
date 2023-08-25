const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const articleX = document.querySelector(".articleX");
const imgMain = document.querySelectorAll(".imgMain");
const quantBallonCart = document.querySelector(".quantBallonCart");
const addCart = document.getElementById("addCart");
const aside = document.querySelector("aside");
const priceTotal = document.querySelector("strong");
const productSelect = document.querySelectorAll(".imgsProduct>section:last-child article");
const imgsProductSelect = document.querySelectorAll(".imgsProduct>section:last-child article img");
const quantP = document.getElementById("quantP");
const quantCartSpan = document.getElementById("quantCartSpan");
const priceProduct = 125;
let quantProduct = 0;

const quant = (...val) => val.forEach(element => element.textContent = quantProduct);
const replaceImgMain = (index, imgNum) => imgMain[index].setAttribute("src", `./images/image-product-${imgNum}.jpg`);

plus.addEventListener("click", () => {
    quantProduct++;
    quant(quantP, quantCartSpan);
});
minus.addEventListener("click", () => {
    if (quantProduct < 1) {
        priceTotal.textContent = 0;
    }else{
        quantProduct--;
        quant(quantCartSpan, quantP);
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
        quant(quantBallonCart);
        priceTotal.textContent = parseFloat(priceProduct * quantProduct);
    }
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