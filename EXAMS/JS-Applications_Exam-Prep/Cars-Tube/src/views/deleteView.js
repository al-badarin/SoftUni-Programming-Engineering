import * as carService from '../services/carService.js';

export const deleteView = async (ctx) => {
    try {
        const car = await carService.getOne(ctx.params.carId);

        let confirmed = confirm(`Do you want to delete the car: ${car.brand} ${car.model} ${car.year}`);

        if (confirmed) {
            await carService.remove(ctx.params.carId);

            ctx.page.redirect('/catalog');
        }
    } catch (err) {
        alert(err);
    }
}