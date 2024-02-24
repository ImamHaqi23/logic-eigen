const compareArray = (input, query) => {
  let arr = [];

  for (let i = 0; i < query.length; i++) {
    let count = 0;
    for (let j = 0; j < input.length; j++) {
      if (query[i] === input[j]) {
        count++;
      }
    }
    arr.push(count);
  }

  return arr;
};

INPUT = ['xc', 'dz', 'bbb', 'dz'];
QUERY = ['bbb', 'ac', 'dz'];

console.log(compareArray(INPUT, QUERY));

// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT
