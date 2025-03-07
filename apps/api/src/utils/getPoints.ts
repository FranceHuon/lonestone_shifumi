// import type { PlayersChoices } from '../routes/shifumi.$gameId'
// import { Choice } from '@shifumi/dtos'

// export function getPoints(gamePlay: PlayersChoices) {
//   const points = {
//     userPoints: 0,
//     computerPoints: 0,
//   }
//   gamePlay.forEach((round) => {
//     const { userChoice, computerChoice } = round
//     if (
//       (userChoice === Choice.LEAF && computerChoice === Choice.STONE)
//       || (userChoice === Choice.SCISSORS && computerChoice === Choice.LEAF)
//       || (userChoice === Choice.STONE && computerChoice === Choice.SCISSORS)
//     ) {
//       points.userPoints += 1
//     }
//     else if (
//       (computerChoice === Choice.LEAF && userChoice === Choice.STONE)
//       || (computerChoice === Choice.SCISSORS && userChoice === Choice.LEAF)
//       || (computerChoice === Choice.STONE && userChoice === Choice.SCISSORS)
//     ) {
//       points.computerPoints += 1
//     }
//   })

//   return points
// }

// export function getRoundPoints(userChoice: Choice, computerChoice: Choice) {
//   const winningCombinations = {
//     [Choice.LEAF]: Choice.STONE,
//     [Choice.STONE]: Choice.SCISSORS,
//     [Choice.SCISSORS]: Choice.LEAF,
//   }

//   if (winningCombinations[userChoice] === computerChoice) {
//     return { userPoints: 1, computerPoints: 0 }
//   }

//   if (winningCombinations[computerChoice] === userChoice) {
//     return { userPoints: 0, computerPoints: 1 }
//   }
//   return { userPoints: 0, computerPoints: 0 }
// }

// export function getPoints(gamePlay: PlayersChoices) {
//   return gamePlay.reduce(
//     (points, round) => {
//       const { userChoice, computerChoice } = round
//       const roundPoints = getRoundPoints(userChoice, computerChoice)
//       points.userPoints += roundPoints.userPoints
//       points.computerPoints += roundPoints.computerPoints
//       return points
//     },
//     { userPoints: 0, computerPoints: 0 },
//   )
// }
