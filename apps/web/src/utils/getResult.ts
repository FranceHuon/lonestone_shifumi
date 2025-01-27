import { choices } from './choices'
import { Choice, Result } from './enums'

export function getResult(userLastGamePlay: Choice, computerLastGamePlay: Choice) {
  if (userLastGamePlay === computerLastGamePlay) {
    return Result.DRAW
  }
  else if (
    (userLastGamePlay === Choice.LEAF
      && computerLastGamePlay === Choice.SCISSORS)
    || (userLastGamePlay === Choice.STONE
      && computerLastGamePlay === Choice.LEAF)
    || (userLastGamePlay === Choice.SCISSORS
      && computerLastGamePlay === Choice.STONE)
  ) {
    return Result.LOOSE
  }
  else {
    return Result.WIN
  }
}

export function getRoundResult({
  userChoice,
  computerChoice,
}: {
  userChoice: Choice
  computerChoice: Choice
}) {
  const result = getResult(userChoice, computerChoice)

  const roundResult = {
    leftIcon: choices[userChoice].icon,
    rightIcon: choices[computerChoice].icon,
    result,
  }

  if (result === Result.DRAW) {
    return {
      ...roundResult,
      sentence: 'égalité',
      iconColorLeft: 'color.darkBlue',
      iconColorRight: 'color.darkBlue',
    }
  }
  else if (result === Result.WIN) {
    return {
      ...roundResult,
      sentence:
				`${choices[userChoice].name}`
				+ ' bat '
				+ `${choices[computerChoice].name}`,
      iconColorLeft: 'color.green',
      iconColorRight: 'color.red',
    }
  }
  else {
    return {
      ...roundResult,
      sentence:
		`${choices[computerChoice].name}`
		+ ' bat '
		+ `${choices[userChoice].name}`,
      iconColorLeft: 'color.red',
      iconColorRight: 'color.green',
    }
  }
}
