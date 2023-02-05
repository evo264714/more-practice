const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. boshonto kale tomay bolte parini.shada shada kala kalas';

const searchString = 'Pakhi';

const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(lyrics.indexOf("kala"));
console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('shada')){
    console.log('exists inside of the string');
}
else{
    console.log('Cannot find it');
}

//* startsWith
console.log(lyrics.startsWith('Tumi'))

//* endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

fileName.endsWith('.pdf');