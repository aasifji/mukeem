const link = document.querySelector("a");
console.log(link.getAttribute('href'));
link.setAttribute("href", "https://facebook.com");
console.log(link.getAttribute("href"))

const inputElement = document.querySelector('.change');
console.log(inputElement.getAttribute('href'));

// INNER html

const headline = document.querySelector(".inner");
console.log(headline.innerHTML);
headline.innerHTML = "<h2>I am a page of web";
console.log(headline.innerHTML)
console.log(headline.textContent)

const beforbegin = document.querySelector(".inner");
beforbegin.insertAdjacentHTML("beforebegin","<li> teach tudent </li>");
console.log(beforbegin.textContent)

// clone nodes

const ul = document.querySelector(".inner");
const li = document.createElement("li");
li.textContent = "new todo";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);
// ul.appendChild(li);
const reference = document.querySelector(".pic");
ul.replaceChild(li, reference);


const rep = document.querySelector(".pic")
const creat = document.createElement("p");
creat.textContent = "aasif";






