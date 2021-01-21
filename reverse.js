// var x = 123456;
// var sum = 0;
//
// while(x>0){
//   let b = x % 10;
//   // console.log(b);
//   sum = sum * 10 + b;
//   x = parseInt(x / 10);
//
// }
// console.log(sum);

// let n = 987456
// function reverse_a_number(n)
// {
//   return n.reverse(n);
// }
// console.log(reverse_a_number(n));


const z = 124323;
const reverse = (z) => parseInt(String(z)
  .split("")
  .reverse()
  .join(""), 10);
console.log(reverse(z));


/*Let’s say num = 123
We convert the num to string → num becomes ‘123’
We split ‘123’ → it becomes [‘1’, ‘2’, ‘3’]
We reverse the array → it becomes [‘3’, ‘2’, ‘1’]
We join the array to form a string → it becomes ‘321’
Lastly we parse the string into a Int and returns it → 321
*/
