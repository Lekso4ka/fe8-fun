let first = document.getElementById("pressios");
console.log(first);
let second = document.getElementsByClassName("promo");
console.log(second);
// document.getElementsByTagName("h2");
// document.getElementsByName("usr"); // <input type="text" name="usr">

// console.log(document.querySelector("[name=\"usr\""));

let price = document.querySelector(".price");
console.log(price);

// console.log(second[0]);
// console.log(second[0].innerText += "<b>Oooops</b>")
// console.log(second[0].innerHTML += "<b>Oooops</b>")

let content = price.innerText * 2;
// price.innerText = content; 

price.innerText *= 2;

// v3
document.querySelector(".price").innerText *= 2;

let costs = document.querySelectorAll(".price");
console.log(costs);

for (let i = 0; i < costs.length; i++) {
    costs[i].innerText *= 2;
}

// console.log(second[0].firstElementChild.nextElementSibling);
// console.log(second[0].lastElementChild.previousElementSibling);


console.log(price.nodeType)
console.log(price.nodeValue);
console.log("Fa", price.localName);
console.log("Fe", price.tagName);
console.log("Fi", price.nodeName.toLowerCase());
console.log(price.textContent);
console.log(price.innerText);
console.log(price.firstChild.nodeType);
console.log(price.firstChild.nodeValue);
console.log("Fa", price.firstChild.localName);
console.log("Fe", price.firstChild.tagName);
console.log("Fi", price.firstChild.nodeName);
console.log(price.firstChild.textContent);
console.log(price.firstChild.innerText);

costs.forEach(tag => {
    tag.innerHTML = `<a href="">${tag.innerText}</a>`;
});

let carsTags = Array.from(document.querySelectorAll(".cars li"));
console.log(carsTags);
let cars = [];
for (let car of carsTags) {
    cars.push(car.innerText);
}
console.log(cars);

console.log(carsTags.map(c => c.innerText));