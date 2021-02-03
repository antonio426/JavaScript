var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello website';

document.querySelector('img').onclick = function() {
    alert('Ouch! Stop poking me!');
}

alert('hello user!');

var myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc ==='images/view.jpg'){
        myImage.setAttribute('src','images/view2.jpg');
    }else{
        myImage.setAttribute('src','images/view.jpg')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    //如果輸入為空值則繼續輸入
    if(!myName||myName ===null){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to is cool wecsite, ' + myName;
    }
  }
  //如果輸入資料有在資料庫則輸出，若沒有則建立
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome to is cool wecsite, ' + storedName;
  }
  //設定按鈕功能與綁定
  myButton.onclick = function() {
    setUserName();
  }