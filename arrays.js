var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

var mars = "mars"

function addElementToBeginningOfArray(chocolateBars, mars) { return [mars,...chocolateBars] }

function destructivelyAddElementToBeginningOfArray(chocolateBars, mars) { chocolateBars.unshift(mars); return chocolateBars; }

function addElementToEndOfArray(chocolateBars, mars) { return [chocolateBars, ...mars] }

function destructivelyAddElementToEndOfArray(chocolateBars, mars) { chocolateBars.push(mars); return chocolateBars; }
