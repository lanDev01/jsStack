// exercise odd or even

function evenOrOdd(num) {
  return num % 2 === 0 ? "par" : "impar"
}

// console.log(evenOrOdd(2))

function countdown(num) {
  for(i = 0; i < num; num--) {
    if (num == undefined) return 'Fim'
    console.log(num)
  }
}

console.log(countdown(7))