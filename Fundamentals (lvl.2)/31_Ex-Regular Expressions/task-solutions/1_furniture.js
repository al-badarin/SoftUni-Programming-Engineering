function furniture(data) {

    let text = data.join(' ');
    let furnitureArr = [];
    let totalSum = 0;
    let pattern = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/gm;
    let valid;

    while ((valid = pattern.exec(text)) !== null) {

        let furnitureName = valid.groups['furniture'];
        let price = Number(valid.groups['price']);
        let quantity = Number(valid.groups['quantity']);

        furnitureArr.push(furnitureName);
        totalSum += price * quantity;
    }

    console.log(`Bought furniture:`);

    furnitureArr.forEach(el => console.log(el));

    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);