import * as motorService from '../services/motorService.js';

export const deleteView = async (ctx) => {
    try {
        const motor = await motorService.getOne(ctx.params.motorId);

        let confirmed = confirm(`Do you want to delete this motor?`);

        if (confirmed) {
            await motorService.remove(ctx.params.motorId);

            ctx.page.redirect('/catalog');
        }
    } catch (err) {
        alert(err);
    }
}