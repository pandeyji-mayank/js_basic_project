const startbtn = document.querySelector('#start');
const stopbtn = document.querySelector('#stop');
const h1 = document.querySelector('h1');
const bdy = document.querySelector('body') ;
const lin = document.querySelectorAll('p');
console.log(lin);
function getRandomColor() {
  let s = `#`;
  const allPossibleColor = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(16 * Math.random());
    s += allPossibleColor[index];
  }
  return s;
}

function fasterGetRandomColor() {
    const num = Math.floor(Math.random()* (0xFFFFFF+1));
    return "#" + num.toString(16).toUpperCase();
}

const isDark = (d) => {
    let c  = d.slice(1);      // strip #
    let rgb = parseInt(c, 16);   // convert rrggbb to decimal
    let r = (rgb >> 16) & 0xff;  // extract red
    let g = (rgb >>  8) & 0xff;  // extract green
    let b = (rgb >>  0) & 0xff;  // extract blue
    let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    if (luma < 50) {
        return true;
    }
    return false;
}



let arr = ['#000000', '#000000', '#000000', '#000000', '#000000'];
const setTheCard = () => {
    let i = 0;
    lin.forEach((val)=>{
        val.innerText = arr[i];
        i++;
    })
    document.querySelector('.card1').style.backgroundColor = arr[0]; 
    if(isDark(arr[0])){
        document.querySelector('.card1').style.color = "white";  
    }
    else{
        document.querySelector('.card1').style.color = "black";  
    }
    document.querySelector('.card2').style.backgroundColor = arr[1]; 
    if(isDark(arr[1])){
        document.querySelector('.card2').style.color = "white";  
    }
    else{
        document.querySelector('.card2').style.color = "black";  
    }
    document.querySelector('.card3').style.backgroundColor = arr[2]; 
    if(isDark(arr[2])){
        document.querySelector('.card3').style.color = "white";  
    }
    else{
        document.querySelector('.card3').style.color = "black";  
    }
    document.querySelector('.card4').style.backgroundColor = arr[3]; 
    if(isDark(arr[3])){
        document.querySelector('.card4').style.color = "white";  
    }
    else{
        document.querySelector('.card4').style.color = "black";  
    }
    // document.querySelector('.card4').style.backgroundColor = arr[3]; 
}
// setTheCard();

let intervalId = null;
startbtn.addEventListener('click', () => {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      let s = fasterGetRandomColor();
      bdy.style.backgroundColor = s;
      h1.innerText = s;
      if(isDark(s)){
        h1.style.color = '#ffffff';
      }
      else{
        h1.style.color = '#000000';
      }
      arr.push(s);
      if(arr.length>4){
        arr.shift();
      }
      setTheCard();
      console.log(arr);
    }, 1000);
  }
  console.log('start button clicked');
});
stopbtn.addEventListener('click', () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
});