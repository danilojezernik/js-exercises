/*
* Exercise 1: Sum of Odd Numbers
* This program calculates the sum of all odd numbers between 1 and 20,
* but stops adding if the sum exceeds 50. It uses a for loop and a break statement.
*/

let sum = 0; // Initialize the sum variable to store the sum of odd numbers

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

// Loop through numbers from 1 to 20
for (skip_multiple = 1; skip_multiple <= 20; skip_multiple++) {

    // Check if the current number is a multiple of 3
    if (skip_multiple % 3 === 0) {
        /*
        * If the number is a multiple of 3, skip the rest of the loop body and move to the next iteration
        * Explanation of condition check:
        * The expression 'skip_multiple % 3' calculates the remainder when 'skip_multiple' is divided by 3.
        * If 'skip_multiple' is a multiple of 3, the remainder will be '0', making the condition true.
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