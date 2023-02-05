const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. boshonto kale tomay bolte parini.shada shada kala kalas';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
// console.log(chars);

const partial = lyrics.slice(5, 8);
// console.log(partial);

const partial2 = lyrics.substring(5, 8);
// console.log(partial2);

const lines = [ 
    'Tumi bondhu kala pakhi ami jeno ki',
    'boshonto kale tomay bolte parini',
    'shada shada kala kalas'];

const newSong = lines.join(':');
console.log(newSong);