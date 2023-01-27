// question 1
document.querySelector("h3").innerHTML = "Hello User";

// question 2
const headings = document.querySelectorAll("h4");

for (let i = 0; i < headings.length; i++) {
  headings[i].style.marginBottom = "-20px";
}

//question 3
headings[1].style.backgroundColor = "red";

// question 4
const paragraphs = document.querySelectorAll("p");

paragraphs[0].style.fontSize = "24px";
paragraphs[0].style.color = "blue";

//question 5
const paragraphThree = paragraphs[2];
paragraphThree.innerHTML = "<span>" + paragraphThree.innerHTML + "</span>";

// question 6
const content = document.querySelector(".content");

content.innerHTML += "<p>yabbadabbadoo</p>";

//question 7
contentParagraphs = document.querySelectorAll(".content p");

for (i = 0; i < contentParagraphs.length; i++) {
  contentParagraphs[i].classList.add("content-item");
}

// question 8
const services = document.querySelector("#services");
services.innerHTML = "<li>Halla</li>" + services.innerHTML;

// question 9
services.classList.remove(services.classList[0]);

// question 10
hiddenElement = document.querySelector("#hide");
hiddenElement.style.display = "none";
