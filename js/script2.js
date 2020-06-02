'use strict';

let timeDay = prompt('Введите дату в формате YYYY-MM-DD', '');
let money = prompt('Ваш бюджет на месяц?', '');
let mandatoryExpenses = prompt(
  'Введите обязательную статью расходов в этом месяце',
  ''
);
let howMuch = prompt('Во сколько обойдется?', '');
let monthDay = 30;

let appData = {
  money,
  timeDay,
  expenses: { mandatoryExpenses: howMuch },
  optionalExpenses: '',
  income: '',
  savings: false,
};
// console.log(mandatoryExpenses + ' : ' + howMuch);
let budgetDay = money / monthDay;
alert('Бюджет на 1 день составляет ' + budgetDay);
