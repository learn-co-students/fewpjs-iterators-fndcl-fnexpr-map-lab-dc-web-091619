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

const titleCased = () => {return tutorials.map(tutorial => { // "what does the this keyword mean?"
  let capitalizedSentence = tutorial.split(" ").map(word => { // "what"
    let arrayLetters = word.split("") // "w", "h", "a", "t"
    arrayLetters[0] = arrayLetters[0].toUpperCase() //"W"
    let capitalizedWord = arrayLetters.join("") //"What"  
    return capitalizedWord
  }).join(" ")
  return capitalizedSentence
})}

