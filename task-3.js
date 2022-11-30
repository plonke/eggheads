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