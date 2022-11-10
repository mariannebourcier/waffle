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
  await fetch(wordBank)
  .then((response) => response.text())
  .then((result) => {
    //split transform string in array
    const wordArray = result.split("\n")
    wordSet = new Set(wordArray)
  });
  return { wordSet };
  
}