
const btn = document.querySelector('button')
const content = document.querySelector('q')
const number = document.querySelector('.number')

async function getAdvice(){

    // 0 to 22 

    let stop;
    
    do {
    const requestURL = "https://api.adviceslip.com/advice"
    
    const request = new Request(requestURL)

    const response = await fetch(request)

    const obj = await response.json();

    //while(showAdvice(obj) === false);
    
    stop = showAdvice(obj)
    } while (stop === false);
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