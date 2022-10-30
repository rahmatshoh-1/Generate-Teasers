// Our variables 
let btnGenerate,   text,partBody,     adjactives,animals,
	alimalsBody,   randomPartBody,    randomAdjactives,
	randomAnimals, randomAlimalsBody, result

// call classes from doc HTML
btnGenerate = document.querySelector('.btnGenerate'),
	   text = document.querySelector('.text')

// Our arrays
partBody    = ['рука','нога','голова','волосы'],
adjactives  = ['огромнная','маленькая','красивая','уродливая'],
animals     = ['тигр','собаки','слона','кошки','льва'],
alimalsBody = ['лапа','башка','левая лапа','усик']


function generateDroznilok() {
	// partBody random
	randomPartBody = partBody[Math.floor(Math.random() * partBody.length)]
	// adjactives random
	randomAdjactives = adjactives[Math.floor(Math.random() * adjactives.length)]
	// animals random
	randomAnimals = animals[Math.floor(Math.random() * animals.length)]
	// alimalsBody random
	randomAlimalsBody = alimalsBody[Math.floor(Math.random() * alimalsBody.length)]
	// result
	result = "У тебя "+ randomPartBody +" еще более "+ randomAdjactives + ", чем "+ randomAlimalsBody +' у '+ randomAnimals
	// add result to paragraph text
	text.innerText = result
}
// Generate Start
btnGenerate.addEventListener("click",() => generateDroznilok())

