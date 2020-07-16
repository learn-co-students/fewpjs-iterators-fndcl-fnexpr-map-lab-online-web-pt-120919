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

const titleCased = (input) => tutorials.map(function(tutorial) {
  //return tutorials.map(tutorial => tutorial.split(" ").map(word => word.charAt(0).toUpperCase().join(" ")));
  //split string into array of individual words
  let splitTutorial = tutorial.split(" ");
  let upCasedArray = splitTutorial.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  let newSentence = upCasedArray.join(" ");
  return newSentence;
});

console.log(titleCased);
