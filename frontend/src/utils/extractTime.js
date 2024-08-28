const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const getDay = days[date.getDay()]
  return `${getDay}, ${hours}:${minutes}`;
}

// Helping function to pad single digit number with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}
