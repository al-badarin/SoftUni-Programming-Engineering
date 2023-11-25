import * as funFactsService from '../services/funFactsService.js';

export const deleteView = async (ctx) => {
    try {
        await funFactsService.getOne(ctx.params.factId);

        let confirmed = confirm(`Do you want to delete this fun fact?`);

        if (confirmed) {
            await funFactsService.remove(ctx.params.factId);

            ctx.page.redirect('/catalog');
        }
    } catch (err) {
        alert(err);
    }
};