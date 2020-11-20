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
//   #map over tutorials to get to each individual string
  return tutorials.map( course => {
//     #let words equal each individual word in each string split turn into an array with split by the space 
    let words = course.split(' ')
//     #map over the words and at first letter turn to uppercase then add the rest of the word
    let capitalizedWord =
      words.map( word => word.charAt(0).toUpperCase() + word.slice(1) )
//     #take that array of each word and turn it back into a string seperated by space
    let newTitle = capitalizedWord.join(' ')
//     #return the string 
    return newTitle

})
//   #return the array of strings in tutorials look at line 16. return tutorials.map( course => {
}
