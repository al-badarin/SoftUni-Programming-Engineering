export const factDataIsInvalid = (factData) => {
    const requiredField = [
        'category', 'image-url', 'description', 'additional-info'
    ];
    return requiredField.some(x => !factData[x]);
}