let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pic.jpg") {
    myImage.setAttribute("src", "images/pic2.jpg");
  } else {
    myImage.setAttribute("src", "images/pic.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "酷毙了，" + myName;
      }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = " 酷毙了，" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };