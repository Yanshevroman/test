let money, time;

function start() {
    money = +prompt("Каков Ваш буджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Каков Ваш буджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    optional: [],
    savings: true
};


function chooseExpanses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("Done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpanses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Eжедневный бюджет:" + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay < 2000 && appData.moneyPerDay > 100) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

let opt1, opt2, opt3;

function chooseOptExpenses(){

    opt1 = +prompt("Статья необязательных расходов?", '');
    opt2 = +prompt("Статья необязательных расходов?", '');
    opt3 = +prompt("Статья необязательных расходов?", '');

}

chooseOptExpenses();

let optionalExpenses = {
    1: opt1,
    2: opt2,
    3: opt3
};