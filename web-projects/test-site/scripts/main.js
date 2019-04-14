let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/google-logo.png'){
        myImage.setAttribute('src', 'images/dropbox-logo.png')
    }else{
        myImage.setAttribute('src', 'images/google-logo.png')
        }
    }
function setHeading(name) {
    let myHeading = document.querySelector('h2');
    myHeading.textContent = 'Mozilla 酷毙了' + name + '!';
}
function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}
let storedName = localStorage.getItem('name');
if(!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}
let myButton = document.querySelector('button');
myButton.onclick = setUserName;