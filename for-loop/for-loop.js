/*
 * INCREMENT
 *
 * Count from 1 to 5
 */

// Set a counter
let counter_increment
console.log('Increment')

// counter is set to 1; counter is less than or equal to 5; add one to counter
for (counter_increment = 1; counter_increment <= 5; counter_increment++) {
    // Loop will run as long as counter is less than or equal to 5
    console.log(counter_increment)
}

/*
 * Output
 * 1
 * 2
 * 3
 * 4
 * 5
 */

console.log('') // Space

/*
* DECREMENT
*
* Count from 5 to 1
* */

// Set a counter
let counter_decrement
console.log('Decrement')

// counter is set to 5; counter is bigger or equal to 1; add one to counter
for (counter_decrement = 5; counter_decrement >= 1; counter_decrement--) {
    // Loop will run as long as counter is bigger or equal to 1
    console.log(counter_decrement)
}

/*
 * Output
 * 5
 * 4
 * 3
 * 2
 * 1
 */

/*
* CONTINUE and BREAK
* */

let count_cb;

// counter is set to 0; counter is less than 10; add one to the counter
for (count_cb = 0; count_cb < 10; count_cb++) {

    // If the counter is less than or equal to 3, execute the following block
    if(count_cb <= 3) {
        console.log('continue;')
        continue // Skip the rest of the loop body and move to the next iteration
    }

    // This line will execute only when count_cb is greater than 3
    console.log('Start showing when continue is over')

    // If the counter is exactly 5, execute the following block
    if(count_cb === 5) {
        console.log(`break at:  ${count_cb}`)
        break // Exit the loop immediately
    }

    // This line will execute only if the loop is not continued or broken
    console.log('Lop ends now go on')
}