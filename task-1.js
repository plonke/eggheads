/**
 * 1. Как вы думаете, что хотел сделать программист? Исправьте код и объясните свое решение
 *
 * for (var i = 0; i <5; i++) {
 *   setTimeout(function () {
 *     console.log(i);
 *   }, i * 1000);
 * }
 */

function print(i) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

for (let i = 0; i < 5; i++) {
    print(i)
}
