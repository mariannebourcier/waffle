import wordBank from './word-bank.txt';

//default board with 6 empty words => 6 tries

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""]
]

//create a set for words, like an array
//check if word exists in word bank
//async func
export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
  .then((response) => response.text())
  .then((result) => {
    //split transform string in array
    const wordArray = result.split("\n")
    //randomly choose word of the day
    todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)]
    wordSet = new Set(wordArray)
  });
  return { wordSet };
  
}