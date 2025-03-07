import { Choice } from '@shifumi/dtos'

export function getRandomChoice(): Choice {
  const choices = [Choice.LEAF, Choice.STONE, Choice.SCISSORS]
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}
