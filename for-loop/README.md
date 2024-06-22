# JavaScript Exercises FOR LOOP

## Explain

Computers when programmed correctly, can repeatedly do many jobs with perfection. This is one of the major advantage why
we like to deal with the computers. In case of high calculation intensive data or large amount of data processing
activities, human resources are not reliable in terms of accuracy and productivity as compared to computers.

Nothing is automatic unless someone does it. Yes, we human beings can automate a process by developing and executing
programs in a computer. The feature of repetitiveness in a programming makes tedious data processing work amazingly
efficient and accurate as compared to doing it manually.

One of the repetitive control feature in a programming is known as `for statement` of `for-loop` is for our rescue for
any data intensive processing work. Let's try to explore how `for-loop` works. Suppose our program contains only
a `for-loop`, then in a very generic `for-loop` can be expressed as follows:

```javascript
for (start - loop or initialization; loop - condition; counter - update) {
    // execute statement(s)
}
```

- **start-loop** or `initialization` is the step where a variable is set to start the loop, marking the beginning of the
  repetitive cycle.
- **loop-condition** is a logical expression which evaluates to a boolean value, either `true` of `false`. Based on
  this (`true/false`) value, `for-loop` control structure decides whether to repeat the set of statement(s) or not.
- **counter-update** refers to the change in the variable's value by a fixed step (either increment or decrement) that
  occurs after all the statements in `for-loop` block have been executed. It is closely related to `start-loop`
  and `loop-condition`.

The for-loop helps a programmer to repeat programming statement(s) over a "range of values". When we talk about a range,
then it must have a minimum value and a maximum value.

### break and continue keyword

- **break** keyword within the `for-loop` stops further repetition of loop when condition for **break** statement is
  reached. It's similar to how a moving car stops when the driver applies the **break**. When some condition with break
  is meet, it will exit loop.
- **continue** keyword returns control to the `for-loop`, skipping the remaining statements in the current iteration and
  proceeding with the next iteration of the loop.