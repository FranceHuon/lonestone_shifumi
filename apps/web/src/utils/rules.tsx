import { Rule } from './enums'

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
