let topOffer = document.querySelector('.offer_1');
let rightOffer = document.querySelector('.offer_2');
let bottomOffer = document.querySelector('.offer_3');
let leftOffer = document.querySelector('.offer_4');
let container1 = document.querySelector('.container1');
let container2 = document.querySelector('.container2');
let twoGb = document.querySelector('.two_gb');
let fiveGb = document.querySelector('.five_gb');
let sixGb = document.querySelector('.six_gb');
let mb = document.querySelector('.mb');
let button = document.querySelector('.button');



topOffer.addEventListener('click', topOfferF);
rightOffer.addEventListener('click', rightOfferF);
bottomOffer.addEventListener('click', bottomOfferF);
leftOffer.addEventListener('click', leftOfferF);

function topOfferF() {
    container2.className = container2.className.replace('hidden', ' '); //remove shake class
    container1.style.display = "none";
    twoGb.className = twoGb.className.replace('hidden', 'fadeIn'); //remove shake class
    setTimeout(function () {
        button.style.display = "block";
    },2e3)
    button.onclick = function () {
        var ctaUrl = "http://www.kalerkantho.com/";
        window.open(ctaUrl);
    }
}

function rightOfferF() {
    container2.className = container2.className.replace('hidden', ' ');
    container1.style.display = "none";
    fiveGb.className = fiveGb.className.replace('hidden', 'fadeIn');
    setTimeout(function () {
        button.style.display = "block";
    },2e3)
    button.onclick = function () {
        var ctaUrl = "https://stackoverflow.com/";
        window.open(ctaUrl);
    }
}


function bottomOfferF() {
    container2.className = container2.className.replace('hidden', ' ');
    container1.style.display = "none";
    sixGb.className = sixGb.className.replace('hidden', 'fadeIn');
    setTimeout(function () {
        button.style.display = "block";
    },2e3)
    button.onclick = function () {
        var ctaUrl = "https://www.prothomalo.com/";
        window.open(ctaUrl);
    }
}

function leftOfferF() {
    container2.className = container2.className.replace('hidden',' ');
    container1.style.display = "none";
    mb.className = mb.className.replace('hidden', 'fadeIn');
    setTimeout(function () {
        button.style.display = "block";
    },2e3)
    button.onclick = function () {
        var ctaUrl = "https://www.wizardsbd.com/";
        window.open(ctaUrl);
    }
}



container2.onclick = function () {
    container2.classList ? container2.classList.add('hidden') : container2.className += ' hidden';
    document.location.reload(true);
//     container1.style.display = "block";
}





