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
let arr = ['#000000', '#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0'];
const setTheCard = () => {
    let i = 0;
    lin.forEach((val)=>{
        val.innerText = arr[i];
        i++;
    })
    document.querySelector('.card1').style.backgroundColor = arr[0]; 
    document.querySelector('.card2').style.backgroundColor = arr[1]; 
    document.querySelector('.card3').style.backgroundColor = arr[2]; 
    document.querySelector('.card4').style.backgroundColor = arr[3]; 
    // document.querySelector('.card4').style.backgroundColor = arr[3]; 
}
// setTheCard();

let intervalId = null;
startbtn.addEventListener('click', () => {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      let s = getRandomColor();
      bdy.style.backgroundColor = s;
      h1.innerText = s;
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