let money = +prompt("Каков Ваш буджет на месяц?");
//console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    optional: [],
    savings: false
};

let dayExpenses = money / 30;

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50) {
        console.log("Done");
        appData.expenses[a] = b; 
    }

};

// let i = 0;
// while ( i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//     && a != '' && b != '' && a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b; 
//     }
//     i++;
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//     && a != '' && b != '' && a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b; 
//     }
//     i++;
// } while ( i < 2);

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("low money");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("normal money");
} else if (appData.moneyPerDay > 2000) {
    console.log("height money");
} else{
    console.log("something goes wrong");
}

console.log(appData);
