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