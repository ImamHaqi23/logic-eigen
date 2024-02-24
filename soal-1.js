const reverseWord = (word) => {
  let number = '';
  let letter = '';
  let reverseLetter = '';

  for (let i = 0; i < word.length; i++) {
    if (!isNaN(Number(word[i]))) {
      number += word[i];
    } else {
      letter += word[i];
    }
  }

  for (let i = letter.length - 1; i >= 0; i--) {
    reverseLetter += letter[i];
  }
  return reverseLetter + number;
};

const word = 'NEGIE1';
const word1 = 'IMAM190';
console.log(reverseWord(word));
console.log(reverseWord(word1));

// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
