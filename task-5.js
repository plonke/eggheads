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