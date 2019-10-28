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
  let capitalized = tutorials.map(function(tutorial){
    let words = tutorial.split(" ");

    let title = words.map(function(word){
      return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
    
    return title;
  })
  return capitalized;
}

// const titleCased = () tutorials.map(tutorial => {
//   return tutorial[0].toUpperCase() + tutorial.slice(1);
// });

// const titleCased = tutorials.map(function(tutorial){
//   return tutorial[0].toUpperCase() + tutorial.slice(1);
// });
// console.log("Graham was here")
// console.log(titleCased)