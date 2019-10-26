let money = prompt("Каков Ваш буджет на месяц?");
//console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD");

let expenses1 = prompt("Введите обязательную статью расходов в этом месяце");
let expenses2 = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: expenses1 +":"+ expenses2,
    optionalExpenses: "",
    optional: [],
    savings: false
};

let dayExpenses = money / 30;
alert(dayExpenses);
