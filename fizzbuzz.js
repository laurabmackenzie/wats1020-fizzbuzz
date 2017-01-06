//Go through numbers 1-20 and call fizzBuzz function to determine output
  document.writeln('<pre>');
for (i=1; i<=20; i++) {
  console.log(fizzBuzz(i));
  document.writeln(fizzBuzz(i));
}
  document.writeln('</pre>');

  function fizzBuzz(number) {
  //If current number is divisible by 3, but it's not divisible by 5, return fizz
  if (i % 3 ===0) {
    if (i % 5 !== 0) {
      return'Fizz';
    }
    else {
      //if it is divisible by 5, return fizzbuzz
      return'FizzBuzz';
    }
  }
  //If current number is not divisible by 5, but is divisible by 5, return buzz
  else if (i % 5 === 0) {
    return 'Buzz';
  }
    //If current number is divisible by neither 3 nor 5, return number
  else {
    return number;
  }
 }   



