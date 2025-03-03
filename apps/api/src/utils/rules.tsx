import { Rule } from '@shifumi/dtos'

export const rules = {
  [Rule.LEAF]: {
    sentence: 'feuille bat pierre',
  },
  [Rule.STONE]: {
    sentence: 'pierre bat ciseaux',
  },
  [Rule.SCISSORS]: {
    sentence: 'ciseaux bat feuille',
  },
}
