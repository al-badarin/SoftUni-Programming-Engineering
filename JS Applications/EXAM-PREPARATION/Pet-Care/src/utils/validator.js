export const petDataIsInvalid = (petData) => {
    const requiredField = [
        'name', 'breed', 'age', 'weight', 'image'
    ];
    return requiredField.some(x => !petData[x]);
}