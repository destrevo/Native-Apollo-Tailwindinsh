export const getDaysInMonth = (year, month) => {
    function calculate(year, month) {
        return new Date(year, month, 0).getDate();
      }
    const date = new Date();
    const currentYear = date.getFullYear();
    const daysInCurrentMonth = calculate(year, month);
    const days = [];
    for (let i = 1; i <= daysInCurrentMonth; i++) {
        days.push(new Date(currentYear, month - 1, i).toLocaleDateString('en-GB', { weekday: 'long' }));
    }
    return days;
    }