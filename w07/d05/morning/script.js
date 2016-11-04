function clock (hour, minute) {
  if (hour > 12 || minute > 59) {
    return 'out of range'
  }
  const minuteDegree = minute * 6;
  let hourDegree;
  if (hour === 12) {
    hourDegree = .5 * minute;
  } else {
    hourDegree = hour * 30 + (.5 * minute);
  }

  if (minuteDegree > hourDegree) {
    let firstAnswer = (minuteDegree - hourDegree);
    let secondAnswer = (360 - firstAnswer);
    return [firstAnswer, secondAnswer];
  } else {
    let firstAnswer = (hourDegree - minuteDegree);
    let secondAnswer = (360 - firstAnswer);
    return [firstAnswer, secondAnswer];
  }
}
