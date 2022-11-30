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

const apiResponse = JSON.stringify([
    { price: 100 },
    { price: 200 },
    {},
]);

const order = composeAPIResponse(apiResponse);
order && printOrderTotal(order);

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
    let total = 0;
    order.forEach(item => {
        total += item.price || 0
    });

    const totalString = total > 0 ? `${total} ₽` : 'Бесплатно';
    console.log(`Стоимость заказа: ${totalString}`);
}