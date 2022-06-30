let arr = ["289349", "349348", "41239", "39483", "49839", "89438", "91738"];

arr.forEach(e => {
  if (e.startsWith('2') || e.startsWith('4')) {
    console.log(e);
  }
});

function isPrime(n) {
  for (let i = 2; i * i <= n; i == 2 ? i++ : i += 2)
      if (n % i == 0) return false;
  return n > 1;
}

const res = [...Array(100)].reduce((a, _, i) => a.concat(isPrime(i) ? `Делители числа ${i}: 1 и ${i}<br>` : []), []).join('\n');

document.write(res);