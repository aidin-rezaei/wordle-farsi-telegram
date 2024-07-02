// import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { saveStatsToLocalStorage } from '../../lib/localStorage'
// import { shareStatus } from '../../lib/share'
import { getWordOfDay, setWordOfDayData  } from '../../lib/words'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
} from '../../constants/strings'
// import { useEffect, useState } from 'react'
// import { isWordInWordList, isWinningWord, solution } from './lib/words'
// import { MAX_CHALLENGES } from '../../constants/settings'
// type Props = {
//   isOpen: boolean
//   handleClose: () => void
//   guesses: string[]
//   gameStats: GameStats
//   isGameLost: boolean
//   isGameWon: boolean
//   setisRevealing: any
//   handleShare: () => void
// }

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  setIsRevealing,
  setGuesses,
  setIsGameLost,
  setIsGameWon,
  handleShare,
}: any) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }

  // useEffect(() => {

  // }, [])
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram gameStats={gameStats} />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-2 dark:text-white">
          <div>
            {/* <h5>{NEW_WORD_TEXT}</h5> */}
            {/* <Countdown
              className="text-lg font-medium text-gray-900 dark:text-gray-100"
              date={tomorrow}
              daysInHours={true}
            /> */}
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              const wordOfDay = getWordOfDay()
              setWordOfDayData(wordOfDay);
              // solution = wordOfDay.solution
              // saveGameStateToLocalStorage({ "guesses": [], solution })
              setIsRevealing(false)
              setGuesses([])
              handleClose()
              setIsGameLost(false)
              setIsGameWon(false)
              saveStatsToLocalStorage({ "winDistribution": [0, 0, 0, 0, 0, 0], "gamesFailed": 0, "currentStreak": 0, "bestStreak": 0, "totalGames": 0, "successRate": 0 })
              // {"winDistribution":[8,1,0,0,2,0],"gamesFailed":0,"currentStreak":11,"bestStreak":11,"totalGames":11,"successRate":100}
              // shareStatus(guesses, isGameLost)
              // handleShare()
            }}
          >
            {/* {SHARE_TEXT} */}
            کلمه جدید
          </button>
        </div>
      )}
    </BaseModal>
  )
}
