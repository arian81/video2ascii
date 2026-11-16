// Weight helpers for the overlay label. The conversion factors come from the
// Unit-Converter repo (script.js) so both pages show the same numbers.

const POUNDS_PER_KILO = 2.205
const GALLONS_PER_LITER = 3.785

// Round to three decimals, same as Unit-Converter.
function round3(value) {
  return Math.round((value + Number.EPSILON) * 1000) / 1000
}

function poundsToKilos(pounds) {
  return round3(pounds * POUNDS_PER_KILO)
}

function litersToGallons(liters) {
  return round3(liters * GALLONS_PER_LITER)
}

function weightLabel(pounds) {
  return `${pounds} pounds = ${poundsToKilos(pounds)} kilos`
}
