const smallCups = document.querySelectorAll('.small')
// const cups = document.querySelector('.cups')
const bigCup = document.querySelector('.big')
const remained = document.querySelector('.remaining')
const filled = document.querySelector('.fill')

updateBigCup()
  smallCups.forEach((cup, idx)=>{
    cup.addEventListener('click', ()=> hightlightCups(idx))
    })
  
  
  function hightlightCups(idx){
    if(smallCups[idx].classList.contains('active')&&
     !smallCups[idx].nextElementSibling.classList.contains('active')){

      idx--
    }
   smallCups.forEach((cup, idx2)=>{
    if(idx2 <= idx){
      cup.classList.add('active')
    }else{
      cup.classList.remove('active')
    }
   })
   updateBigCup()
  }
 
function updateBigCup(){
  const fullCups =document.querySelectorAll('.small.active').length  
  const totalCups = smallCups.length
  let x = fullCups /totalCups *100

  filled.style.height = `${x}%`
  filled.innerText = x + '%'
  remained.style.height = `${100-x}%`
  remained.innerHTML = `${2-2*x/100}L <small>remained</small>`
 
}




