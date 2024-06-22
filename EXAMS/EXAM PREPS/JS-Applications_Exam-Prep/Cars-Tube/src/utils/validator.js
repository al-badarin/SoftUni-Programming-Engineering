export const carIsInvalid = (carData) => {
    const requiredField = [
        'brand', 'model', 'description', 'year', 'imageUrl', 'price'
    ];
    return requiredField.some(x => !carData[x]);
}