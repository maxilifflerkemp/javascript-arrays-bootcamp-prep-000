var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

var mars = "mars"

function addElementToBeginningOfArray(chocolateBars, mars) { return [mars, ...chocolateBars] }

function destructivelyAddElementToBeginningOfArray(chocolateBars, mars) { return chocolateBars(mars,...chocolateBars)}
