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

function titleCased() {

  const newTutorials = [];

  tutorials.map(function (tutorial) {
    const eachElm = tutorial.split(' ');

    const upperCaseArray = [];
    for (let i = 0; i < eachElm.length; i++) {
      const upcaseWord = eachElm[i][0].toUpperCase() + eachElm[i].slice(1);
      upperCaseArray.push(upcaseWord)
    }
    newTutorials.push(upperCaseArray.join(" "));

  });
  return newTutorials
}

// titleCased();
