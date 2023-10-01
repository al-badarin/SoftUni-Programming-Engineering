function solve(bandName, albumName, songName) {

    let songTime = (albumName.length * bandName.length) * songName.length / 2;
    let rotationsCount = Math.ceil(songTime / 2.5);

    console.log(`The plate was rotated ${rotationsCount} times.`);
}
solve('Black Sabbath', 'Paranoid', 'War Pigs');