/**
 * 1. Как вы думаете, что хотел сделать программист? Исправьте код и объясните свое решение
 *
 * for (var i = 0; i <5; i++) {
 *   setTimeout(function () {
 *     console.log(i);
 *   }, i * 1000);
 * }
 */

/**
 * В исходном коде i при логировании будет всегда равна 4
 * Нужно было избавиться от глобальной зависимости
 */

function print(i) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

for (let i = 0; i < 5; i++) {
    print(i)
}


/**
 * 2. Написать функцию, которая будет работать правильно при обоих вызовах,
 * как показано на приведенном коде
 *
 * console.log(sum(2, 3)); // результат 5
 * console.log(sum(2)(3)(4)...); // сумма всех элементов
 */

function sum(...args) {
    let num = 0;

    function handle(...args) {
        args.forEach(arg => num += arg);

        if (args.length === 0 || args.length === 2) {
            return num;
        }

        return handle;
    }

    return handle(...args);
}

console.log(sum(2, 3));
console.log(sum(2)(3)(4)());


/**
 * 3. Какая проблема может быть с этим кодом, если список очень длинный?
 * Предложите и объясните свое решение
 *
 * let list = readHugeList();
 * let nextListItem = function () {
 *     let item = list.pop();
 *     if (item) {
 *         ... обработка записи
 *         nextListItem();
 *     }
 * };
 */

function readHugeList() {
    return Array(1000000).fill(1);
}

let list = readHugeList();
let listLength = list.length;

/**
 * Если делать рекурсию с большим количеством вызовов, то это может упереться в лимит js
 * Поэтому я решил ее убрать и сделать через самый быстрый цикл (насколько я знаю)
 */

while (listLength--) {
    const item = list[listLength];
    // ... обработка записи
}


/**
 * 4. Чему будет равна переменная "a" после выполнения этого участка кода?
 * Объясните почему.
 */

let a = 1;
function foo() {
    a = 2;
    return 10;
}

/**
 * 1. выражение трансформируется в a = 1 + foo()
 * 2. выполняется функция foo()
 * 3. в формулу подставляется значение, возвращенное из функции a = 1 + 10
 * 4. к a присваивается значение 11
 */
a += foo();

/**
 * 1. выражение трансформируется в a = 11 + foo()
 * 2. выполняется функция foo()
 * 3. в формулу подставляется значение, возвращенное из функции a = 11 + 10
 * 4. к a присваивается значение 21
 */
a += foo();

// a === 21


/**
 * 5. Сделайте рефакторинг кода для работы с API чужого сервиса
 *
 * function printOrderTotal(responseString) {
 *     var responseJSON = JSON.parse(responseString);
 *     responseJSON.forEach(function (item, index) {
 *         if (item.price = undefined) {
 *             item.price = 0;
 *         }
 *         orderSubtotal += item.price;
 *     });
 *     console.log("Стоимость заказа: "+ total >0 ? "Бесплатно": total + " руб.");
 * }
 */

fetchData().then(composeAPIResponse).then(printOrderTotal);

function fetchData() {
    return Promise.resolve(JSON.stringify([
        { price: 100 },
        { price: 200 },
        {},
    ]))
}

function composeAPIResponse(responseString) {
    try {
        const order = JSON.parse(responseString);
        if (!Array.isArray(order)) {
            new Error('Invalid response format, Array expected');
        }

        return order;
    } catch (e) {
        console.error(e);
        return null;
    }
}

function printOrderTotal(order) {
    if (!order) return;

    let total = 0;
    order.forEach(item => {
        total += item.price || 0
    });

    const totalString = total > 0 ? `${total} ₽` : 'Бесплатно';
    console.log(`Стоимость заказа: ${totalString}`);
}