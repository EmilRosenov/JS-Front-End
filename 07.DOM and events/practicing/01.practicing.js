//1 practising myself

// const liList = document.getElementsByTagName("li");
// let thirdLi = liList[2];
// thirdLi.textContent += " ----> I added this through the console ;) !";

// for (const li of liList) {
//   li.textContent += " This is a DOM manipulations";
//   li.setAttribute("id", "liAttribute");
//   li.style.backgroundColor = "lightGrey";
// }

// liList[1].style.backgroundColor = "yellow";

// let input = document.getElementById("text-input");
// input.value = "tuk trqbva da ima parola";
// input.value = "";

// const h1Element = document.getElementsByTagName("h1");
// h1Element[0].setAttribute("style", "green");
// h1Element[0].textContent = "My First Website";

//2 practicing myself DOM Operations
// const body = document.querySelector("body");
// //console.log(body.children);
// console.log(`this is the result ${body.children[0].parentElement.textContent}`);

//3 create Element

// let paragraph = document.createElement("p");
// paragraph.textContent = "This is a created paragraph using JS";
// let firstLi = document.querySelector("li");
// firstLi.appendChild(paragraph);
// //firstLi.style.marginBottom = "-20px";
// paragraph.style.marginTop = "0px";

// //4 remove child
// firstLi.removeChild(paragraph);

// //5 replace child
// const div = document.createElement("div");
// div.textContent = "this is a Div";
// firstLi.replaceWith(div);
// //...continue
// const secondLiChild = document.querySelector("li");
// const thirdLi = document.getElementsByTagName("li")[1];
// secondLiChild.replaceWith(div);

// //6 appendChild + prepend()

// const newLi = document.createElement("li");
// const newLastLi = document.createElement("li");
// newLi.textContent = "i Will be positioned at the top of other children";
// thirdLi.prepend(newLi);
// newLastLi.textContent = "I will be positioned at the end";
// thirdLi.append(newLastLi);

//DOM EVENTS

const button = document.getElementById("btn");
//1 button.addEventListener("click", sayHi);
button.addEventListener("mouseout", printTextWhenMouseOut);

// function sayHi(e) {
// console.log("I w//as clicked");
//}

function printTextWhenMouseOut(e) {
  console.log("Printing as mouse is outside of button perimeters");
}
