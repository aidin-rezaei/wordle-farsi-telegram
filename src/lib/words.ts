import { WORDS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/validGuesses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALID_GUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  console.log(wordOfDay.solution,word);
  
  return wordOfDay.solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs
  const randomIndex = Math.floor(Math.random() * 233);
  console.log(WORDS[randomIndex].toUpperCase());
  
  return {
    solution: WORDS[randomIndex].toUpperCase(),
    solutionIndex: randomIndex,
    tomorrow: nextday,
  }
}

// export const { solution, solutionIndex, tomorrow } = getWordOfDay()
let wordOfDay = getWordOfDay();

export const getWordOfDayData = () => wordOfDay;

export const setWordOfDayData = (newData?:any) => {
    wordOfDay = { ...wordOfDay, ...newData };
};

// export { getWordOfDayData, setWordOfDayData };