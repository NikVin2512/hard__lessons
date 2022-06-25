const firstFunc = function(arg) {
  if(typeof arg !== 'string') {
    console.log('Не строка');
  }
  if (arg.length > 30){
    arg = arg.slice(0, 30) + '...';
    return arg.trim();
  } else {
    return arg.trim();
  }
};
console.log(firstFunc(" qweqweqwe1qweqweqwe1qweqweqwe1qweqweqwe1 "));