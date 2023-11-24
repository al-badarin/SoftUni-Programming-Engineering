import * as furnitureService from '../services/furnitureService.js';

export const deleteView = async (ctx) => {
    try {
        const furniture = await furnitureService.getOne(ctx.params.furnitureId);

        let confirmed = confirm(`Do you want to delete the furniture: ${furniture.make} - ${furniture.model}`);

        if (confirmed) {
            await furnitureService.remove(ctx.params.furnitureId);

            ctx.page.redirect('/');
        }
    } catch (err) {
        alert(err);
    }
};