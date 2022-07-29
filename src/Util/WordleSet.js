import WordBank from "./WordBank.txt";
export const emptyBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

// creating wordSet from Txt
export const generateWordSet = async () => {
  let WordSet;
  let wordoftheday;
  await fetch(WordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      wordoftheday = wordArr[Math.floor(Math.random() * wordArr.length)];
      WordSet = new Set(wordArr);
    });

  return { WordSet, wordoftheday };
};
