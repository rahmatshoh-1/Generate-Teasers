// Our variables 
let randomAnimals,  randomAlimalsBody, randomAdjactives,
    btnGenerate,    randomPartBody,    text, result

// call classes from doc HTML
btnGenerate = document.querySelector('.btnGenerate'),
       text = document.querySelector('.text')

// generateRandomWords from arrays
const generateRandomWords = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}
// create generateDroznilok function
const generateDroznilok = () => {
// Our arrays
     randomPartBody    = ['рука','нога','голова','волосы','глаза','нос','череп'],
     randomAdjactives  = ['огромнная','маленькая','красивая','уродливая','вонючая','унылая','дурацкая'],
     randomAlimalsBody = ['лапа','башка','левая лапа','усик']
     randomAnimals     = ['тигра','собаки','слона','кошки','льва'],
// result
      result = ["У тебя ", generateRandomWords(randomPartBody)," еще более ", generateRandomWords(randomAdjactives)+",чем ",generateRandomWords(randomAlimalsBody),' у ',generateRandomWords(randomAnimals)].join(" ")
// add result to paragraph text
      text.innerText = result
}
// Generate Start
btnGenerate.addEventListener("click",() => generateDroznilok())
