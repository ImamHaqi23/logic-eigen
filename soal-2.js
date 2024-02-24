const getLongestWord = (sentence) => {
  let temp = '';
  let longestWord = '';

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      temp += sentence[i];
    }

    if (sentence[i] === ' ' || i === sentence.length - 1) {
      if (temp.length > longestWord.length) {
        longestWord = temp;
      }
      temp = '';
    }
  }

  return longestWord;
};

const sentence = 'Saya sangat senang mengerjakan soal algoritma';

console.log(getLongestWord(sentence));

// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
