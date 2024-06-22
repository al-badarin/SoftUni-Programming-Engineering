function theImitationGame(input) {

    let encryptedMessage = input.shift();
    let line = input.shift();

    while (line !== 'Decode') {
        let [action, firstParam, lastParam] = line.split('|');

        switch (action) {
            case 'Move':
                let n = Number(firstParam);
                for (let i = 0; i < n; i++) {
                    let firstLetter = encryptedMessage.slice(0, 1);
                    let otherPart = encryptedMessage.slice(1)
                    encryptedMessage = otherPart + firstLetter;
                }
                break;

            case 'Insert':
                let startIndex = Number(firstParam);
                let value = lastParam;
                let firstPart = encryptedMessage.slice(0, startIndex);
                let secondPart = encryptedMessage.slice(startIndex);
                encryptedMessage = firstPart + value + secondPart;
                break;

            case 'ChangeAll':
                let oldValue = firstParam;
                let newValue = lastParam;

                while (encryptedMessage.includes(oldValue)) {
                    encryptedMessage = encryptedMessage.replace(oldValue, newValue);
                }
                // let pattern = new RegExp(oldValue, 'g');
                // encryptedMessage = encryptedMessage.replace(pattern, newValue);
                break;
        }
        line = input.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);