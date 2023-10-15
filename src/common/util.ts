export function convertNumberToMonthName(monthNumber: number): string {
    if (monthNumber < 0 || monthNumber > 11) throw new Error('Invalid month number');
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthNames[monthNumber];
}