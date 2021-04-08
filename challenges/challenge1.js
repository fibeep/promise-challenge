/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 * First Step 1 will print, then step 3, and finally step 2. I know this because
 * step 1 will execute as soon as its encountered, but then step 2 will have a 2 second delay,
 * thus step 3 will execute beforehands since this one too executes upon encountering.
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *  In the order I predicted
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 *  Step 1,2,3 since step 2 will now execute as soon as it is encountered (no more delays).
 *  I was not correct. I am not quite sure why.
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

