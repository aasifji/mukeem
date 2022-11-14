// console.log(window)
console.log(document)
console.dir(window.document)
console.log(document.getElementById("home"));
console.log(typeof document.getElementById("home"));

const home = document.getElementById('home');
console.log(home)

const homee = document.querySelector('#home');
console.log(homee)

const contact = document.querySelector('.pic');
console.log(contact)

const change = document.querySelector('.change')
console.log(change.textContent)
change.textContent = 'hello';
console.log(change.textContent)

const mainheading = document.querySelector('div.headline h2');
// console.log(mainheading.style)
mainheading.style.color = "blue"
mainheading.style.backgroundColor = "#444"
mainheading.style.border = '10px solid yellow'
