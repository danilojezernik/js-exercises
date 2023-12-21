/*
* 1. Write a JavaScript program to display the current day and time in the following format:
*
* Sample Output ↓
*
* Today is: Thursday
* Month is: February
* Current date is: 04/02/2023
* Current time is: 8:41:48 AM
* */



/*
* 1. Solution for #1
* */

// Create a new Date object representing the current date and time
let date = new Date()

// Array representing days of the week
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Get the current day of the week and store its name
let dayName = days[date.getDay()];

// Display the current day of the week
console.log('Today is: ' + dayName)

// Create a new Intl.DateTimeFormat object to format the date with the full month name in English
const nameOfMonthEN = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(new Date());

// Display the current month
console.log('Month is: ' + nameOfMonthEN)

// Function to pad a number with leading zeros to ensure it has two digits
function padTo2Digits(num) {
    return num.toString().padStart(2, '0')
}

// Get the current year, month, and day and pad them to two digits
let currentYear = date.getFullYear()
let currentMonth = padTo2Digits(date.getMonth() + 1)
let currentDay = padTo2Digits(date.getDay())

// Combine the year, month, and day into a formatted date string
let fullTime = [currentDay, currentMonth, currentYear].join('/')

// Display the current date
console.log('Current date is: ' + fullTime)

// Display the current time in a localized string format
console.log('Current time is: ' + date.toLocaleTimeString())
