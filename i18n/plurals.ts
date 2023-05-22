export const arabicPlurals = (choice: number): number => {
  const name = new Intl.PluralRules("ar").select(choice)

  return { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 }[name]
}
