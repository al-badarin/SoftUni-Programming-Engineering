import * as petService from '../services/petService.js';

export const deleteView = async (ctx) => {
    try {
        const pet = await petService.getOne(ctx.params.petId);

        let confirmed = confirm(`Do you want to delete the pet: ${pet.name}?`);

        if (confirmed) {
            await petService.remove(ctx.params.petId);

            ctx.page.redirect('/');
        }
    } catch (err) {
        alert(err);
    }
};