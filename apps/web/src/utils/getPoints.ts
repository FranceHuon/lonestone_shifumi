import type { PlayersChoices } from '../components/functional/AppLayout'
import { Choice } from './enums'

export function getPoints(gamePlay: PlayersChoices) {
  const points = {
    userPoints: 0,
    computerPoints: 0,
  }
  gamePlay.forEach((round) => {
    const { userChoice, computerChoice } = round
    if (
      (userChoice === Choice.LEAF && computerChoice === Choice.STONE)
      || (userChoice === Choice.SCISSORS && computerChoice === Choice.LEAF)
      || (userChoice === Choice.STONE && computerChoice === Choice.SCISSORS)
    ) {
      points.userPoints += 1
    }
    else if (
      (computerChoice === Choice.LEAF && userChoice === Choice.STONE)
      || (computerChoice === Choice.SCISSORS && userChoice === Choice.LEAF)
      || (computerChoice === Choice.STONE && userChoice === Choice.SCISSORS)
    ) {
      points.computerPoints += 1
    }
  })

  return points
}
