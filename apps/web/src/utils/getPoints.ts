import type { PlayersChoices } from '@shifumi/dtos'
import { Choice } from '@shifumi/dtos'

// export function getPoints(gamePlay: PlayersChoices) {
//   const points = {
//     playerOnePoints: 0,
//     playerTwoPoints: 0,
//   }
//   gamePlay.forEach((round) => {
//     const { userChoice, computerChoice } = round
//     if (
//       (userChoice === Choice.LEAF && computerChoice === Choice.STONE)
//       || (userChoice === Choice.SCISSORS && computerChoice === Choice.LEAF)
//       || (userChoice === Choice.STONE && computerChoice === Choice.SCISSORS)
//     ) {
//       points.playerOnePoints += 1
//     }
//     else if (
//       (computerChoice === Choice.LEAF && userChoice === Choice.STONE)
//       || (computerChoice === Choice.SCISSORS && userChoice === Choice.LEAF)
//       || (computerChoice === Choice.STONE && userChoice === Choice.SCISSORS)
//     ) {
//       points.playerTwoPoints += 1
//     }
//   })

//   return points
// }

export function getRoundPoints(playerOneChoice: Choice, playerTwoChoice: Choice) {
  const winningCombinations = {
    [Choice.LEAF]: Choice.STONE,
    [Choice.STONE]: Choice.SCISSORS,
    [Choice.SCISSORS]: Choice.LEAF,
  }

  if (winningCombinations[playerOneChoice] === playerTwoChoice) {
    return { playerOnePoints: 1, playerTwoPoints: 0 }
  }

  if (winningCombinations[playerTwoChoice] === playerOneChoice) {
    return { playerOnePoints: 0, playerTwoPoints: 1 }
  }
  return { playerOnePoints: 0, playerTwoPoints: 0 }
}

export function getPoints(gamePlay: PlayersChoices) {
  return gamePlay.reduce(
    (points, round) => {
      const { playerOneChoice, playerTwoChoice } = round
      const roundPoints = getRoundPoints(playerOneChoice, playerTwoChoice)
      points.playerOnePoints += roundPoints.playerOnePoints
      points.playerTwoPoints += roundPoints.playerTwoPoints
      return points
    },
    { playerOnePoints: 0, playerTwoPoints: 0 },
  )
}
