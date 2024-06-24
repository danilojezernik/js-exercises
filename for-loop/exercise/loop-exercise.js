/*
* Exercise 1: Sum of Odd Numbers
* This program calculates the sum of all odd numbers between 1 and 20,
* but stops adding if the sum exceeds 50. It uses a for loop and a break statement.
*/

let sum = 0; // Initialize the sum variable to store the sum of odd numbers

console.log('Exercise 1: Sum of Odd Numbers')
// Loop through numbers from 1 to 20
for (let count = 1; count <= 20; count++) {

    // Check if the current number is odd
    if (count % 2 !== 0) {
        sum += count; // If the number is odd, add it to the sum
        console.log(`Adding ${count}, current sum: ${sum}`); // Print the current number and the updated sum
    }

    // Check if the sum exceeds 50
    if (sum > 50) {
        console.log(`Sum exceeds 50. Breaking at sum: ${sum}`); // Print a message indicating that the sum exceeds 50
        break; // Exit the loop
    }
}

/**
 * Explanation:
 * 1. We initialize a variable `sum` to store the sum of odd numbers.
 * 2. We use a `for` loop to iterate through numbers from 1 to 20.
 * 3. Inside the loop, we check if the current number `count` is odd by using the modulus operator `%`.
 * - If `count % 2 !== 0`, the number is odd.
 * 4. If the number is odd, we add it to the `sum` variable.
 * 5. We then print the current number and the updated sum to the console.
 * 6. After adding the number to the sum, we check if the sum exceeds 50.
 * - If `sum > 50`, we print a message indicating that the sum exceeds 50 and break out of the loop.
 * 7. The loop continues until either all numbers from 1 to 20 have been processed or the sum exceeds 50, in which case the loop is exited early.
 */

/*
* Exercise 2: Skipping Multiples of 3
* Write a program that prints the numbers from 1 to 20, but skips multiples of 3. Use a for loop and a continue statement.
*/

let skip_multiple // Variable to store the current number in the loop

console.log('Exercise 2: Skipping Multiples of 3')
// Loop through numbers from 1 to 20
for (skip_multiple = 1; skip_multiple <= 20; skip_multiple++) {

    // Check if the current number is a multiple of 3
    if (skip_multiple % 3 === 0) {
        /*
        * If the number is a multiple of 3, skip the rest of the loop body and move to the next iteration
        *
        * Explanation of condition check:
        * The expression 'skip_multiple % 3' calculates the remainder when 'skip_multiple' is divided by 3.
        * If 'skip_multiple' is a multiple of 3, the remainder will be '0', making the condition true.
        *
        * For example:
        * - If 'skip_multiple' is 3, then '3 % 3' equals '0', so the condition is true.
        * - If 'skip_multiple' is 4, then '4 % 3' equals '1', so the condition is false.
        */
        continue // If the number is a multiple of 3, skip the rest of the loop body and move to the next iteration
    }

    // Print the current number if it is not a multiple of 3
    console.log(skip_multiple)
}

/**
 * Explanation:
 * 1. We declare a variable `skip_multiple` to store the current number in the loop.
 * 2. We use a `for` loop to iterate through numbers from 1 to 20.
 * 3. Inside the loop, we check if the current number `skip_multiple` is a multiple of 3 using the modulus operator `%`.
 * - If `skip_multiple % 3 === 0`, the number is a multiple of 3.
 * 4. If the number is a multiple of 3, we use the `continue` statement to skip the rest of the loop body and move to the next iteration.
 * 5. If the number is not a multiple of 3, we print the number to the console.
 * 6. The loop continues until all numbers from 1 to 20 have been processed, printing only those numbers that are not multiples of 3.
 */

/*
* Exercise 3: Finding the First Prime Number
* Write a program that finds and prints the first prime number greater than 50. Use a for loop, and use a break statement when the first prime number is found.
*/

let prime_number; // Variable to store the current number in the loop

console.log('Exercise 3: Finding the First Prime Number');

for (prime_number = 50; prime_number <= 100; prime_number++) {

    // Assume the current number is prime
    let is_prime = true;

    // Inner loop to check if prime_number is divisible by any number other than 1 and itself
    for (let i = 2; i <= prime_number / 2; i++) {
        if (prime_number % i === 0) {
            // If prime_number is divisible by i, it means prime_number is not a prime number
            is_prime = false; // Set is_prime to false
            break; // Exit the inner loop as we have found a divisor
        }
    }

    // If is_prime is still true, then prime_number is a prime number
    if (is_prime) {
        console.log(`First prime number greater than 50 is: ${prime_number}`);
        break; // Exit the outer loop since we found the first prime number greater than 50
    }
}

/**
 Explanation:
 1. Declare a variable `prime_number` to store the current number being checked.
 2. Print a message indicating the start of the exercise.
 3. Use a `for` loop to iterate through numbers starting from 50 up to 100.
 - The loop will continue until `prime_number` is less than or equal to 100.
 4. Inside the loop, assume the current number (`prime_number`) is prime by setting `is_prime` to true.
 5. Use an inner `for` loop to check if `prime_number` is divisible by any number from 2 to `prime_number / 2`.
 - The inner loop starts with `i` initialized to 2 and runs while `i` is less than or equal to `prime_number / 2`.
 - The reason for checking up to `prime_number / 2` is that a larger factor of `prime_number` must be paired with a smaller factor that has already been checked.
 6. In each iteration of the inner loop, check if `prime_number` is divisible by `i` using the modulus operator `%`.
 - If `prime_number % i === 0`, it means `prime_number` can be divided evenly by `i`, hence it is not a prime number.
 - Set `is_prime` to false.
 - Break out of the inner loop since we found a divisor and there is no need to check further.
 7. After the inner loop, if `is_prime` is still true, it means `prime_number` is a prime number.
 - Print the prime number.
 - Break out of the outer loop since we found the first prime number greater than 50.
 8. The outer loop continues to the next number and repeats the process until a prime number is found or `prime_number` exceeds 100.
 */

/*
* Exercise 4: Divisible by Both 2 and 5
* Write a program that prints the first 5 numbers between 1 and 100 that are divisible by both 2 and 5. Use a for loop and a continue statement to skip numbers that are not divisible by both.
*/

let count_divisible // Variable to iterate through numbers
let count = 0 // counter to keep track of how many numbers have been printed

console.log('Exercise 4: Divisible by Both 2 and 5')

for (count_divisible = 1; count_divisible <= 100; count_divisible++) {

    // Check if number si divisible by both 2 and 5
    if (count_divisible % 2 !== 0 || count_divisible % 5 !== 0) {
        continue // Skip numbers that are not divisible by both 2 and 5
    }

    // Print the number if it is divisible by both 2 and 5
    console.log(count_divisible)

    count++ // Increment the counter

    // Break the loop after printing the first 5 numbers
    if (count === 5) {
        break
    }
}

/**
 Explanation:
 1. Declare a variable `count_divisible` to iterate through numbers from 1 to 100.
 2. Declare a counter variable `count` to keep track of how many numbers that are divisible by both 2 and 5 have been printed.
 3. Use a `for` loop to iterate through numbers from 1 to 100.
 4. Inside the loop, check if the current number `count_divisible` is not divisible by both 2 and 5 using the modulus operator `%`.
 - If the number is not divisible by both 2 and 5, use the `continue` statement to skip the current iteration and move to the next number.
 5. If the number is divisible by both 2 and 5, print the number.
 6. Increment the counter `count` by 1.
 7. Check if the counter `count` has reached 5. If so, break the loop as we have printed the first 5 numbers that are divisible by both 2 and 5.
 8. The loop continues until we have printed the first 5 numbers that are divisible by both 2 and 5 or until `count_divisible` exceeds 100.
 */

/*
* Exercise 5: Sum of Even Numbers in an Array
* Write a program that iterates through an array of integers and calculates the sum of the even numbers. Use a for loop and a continue statement to skip the odd numbers.
*/

let count_even; // Variable to iterate through the array
let sum_even = 0; // Variable to store the sum of even numbers
let integers = [12, 7, 5, 22, 19, 8, 33, 40, 2, 17]; // Array of integers

console.log('Exercise 5: Sum of Even Numbers in an Array');

// Iterate through the array of integers
for (count_even = 0; count_even < integers.length; count_even++) {

    // Check if the current number is odd
    if (integers[count_even] % 2 !== 0) {
        continue; // Skip the rest of the loop and move to the next iteration if the number is odd
    }

    // Add the even number to the sum
    sum_even += integers[count_even];
}

// Print the sum of even numbers
console.log(`Sum of even numbers: ${sum_even}`);

/**
 Explanation:
 1. Declare a variable `count_even` to iterate through the array.
 2. Declare a variable `sum_even` to store the sum of even numbers.
 3. Initialize the array `integers` with a set of integers.
 4. Print a message indicating the start of the exercise.
 5. Use a `for` loop to iterate through each element in the array `integers`.
 - The loop runs from 0 to the length of the array minus one.
 6. Inside the loop, check if the current number is odd using the modulus operator `%`.
 - If `integers[count_even] % 2 !== 0`, the number is odd.
 - Use the `continue` statement to skip the rest of the loop and move to the next iteration if the number is odd.
 7. If the number is even, add it to the `sum_even` variable.
 8. After the loop, print the sum of the even numbers.
 */
