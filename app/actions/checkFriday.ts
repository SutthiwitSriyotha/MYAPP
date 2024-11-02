'use server';

export async function checkIfFriday(dateString: string) {
  const date = new Date(dateString);
  const isFriday = date.getDay() === 5; 
  return isFriday ? "Today is Friday" : "Today is not Friday";
}
