// .days-container {
// }
// .hours-container {
// }
// .mins-container {
// }
// .seconds-container {
// }

const newYear = "1 Jan 2023";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  console.log(newYearDate - currentDate);
}

countdown();
