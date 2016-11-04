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

// Absolute value helps to avoid the if statement
function clocky(hours, minutes) {
  if (hours > 12 || hours < 1 || minutes > 59 || minutes < 0) {
    return 'out of range'
  }
  var degree1 = Math.abs(5.5*minutes - 30*hours);
  var degree2 = 360 - degree1;
  return [degree1, degree2]
}
