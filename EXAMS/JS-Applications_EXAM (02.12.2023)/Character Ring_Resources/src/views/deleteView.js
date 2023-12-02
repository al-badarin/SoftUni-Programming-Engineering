import * as characterService from '../services/characterService.js';

export const deleteView = async (ctx) => {
        let confirmed = confirm(`Do you want to delete this character?`);

        if (confirmed) {
            await characterService.remove(ctx.params.characterId);

            ctx.page.redirect('/catalog');
        }
    } 