const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTutorials = []

  for (const tutorial of tutorials) {
    array = tutorial.split(' ')
    let newArray = []

    for (let word of array) {
      word = word[0].toUpperCase() + word.slice(1)
      newArray.push(word)
    }
    
    let newTutorial = newArray.join(' ')
    newTutorials.push(newTutorial)
  }

  return newTutorials
}

function map(callback, context) {
  callback(context)
}

map(titleCased, tutorials)


