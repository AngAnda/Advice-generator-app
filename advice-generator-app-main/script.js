
const btn = document.querySelector('button')
const content = document.querySelector('q')
const number = document.querySelector('.number')
const min = 0
const max = 224


function randomInt(){
    return Math.floor( Math.random() * max) + 0
}

async function getAdvice(){

    // 0 to 224 

    const requestURL = "https://api.adviceslip.com/advice/" + randomInt()
    
    const request = new Request(requestURL)

    const response = await fetch(request)

    const obj = await response.json();

    //while(showAdvice(obj) === false);
    
    showAdvice(obj)
   // console.log(showAdvice(obj));
}

function showAdvice(obj){
    const advice = obj.slip
    if(content.textContent === advice.advice)
        return false
    content.textContent = advice.advice
    number.textContent = advice.id
    //console.log(advice.advice)
    return true
}

btn.addEventListener('click', () =>{
    getAdvice();
})

getAdvice()