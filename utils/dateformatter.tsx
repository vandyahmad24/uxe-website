export function formatToReadableDate(timestamp: string): string {
  const date = new Date(timestamp);

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  let hours = date.getUTCHours();
  const period = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12;

  return `${formattedDate} - ${hours}${period} UTC`;
}
