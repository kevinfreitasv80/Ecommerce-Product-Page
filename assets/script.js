const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const articleX = document.querySelector(".articleX");
const imgMain = document.querySelector(".imgMain");
const aside = document.querySelector("aside");
const quantP = document.getElementById("quantP");
const quantCartSpan = document.getElementById("quantCartSpan");
let quantProduct = 0;

const quant = (...val) => val.forEach(element => element.textContent = quantProduct);

plus.addEventListener("click", () => {
    quantProduct++;
    quant(quantP, quantCartSpan);
});
minus.addEventListener("click", () => {
    if (quantProduct < 1) {
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
imgMain.addEventListener("click", () => {
    aside.style.display = "block";
});