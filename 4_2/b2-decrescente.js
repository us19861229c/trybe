// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i = i + 1){
  for(let j = 0; j < i; j = j + 1){
    if(numbers[i] > numbers[j]) {
      let position = numbers[j];
      numbers[j] = numbers[i]
      numbers[i] = position
    }
  }
}console.log(numbers)