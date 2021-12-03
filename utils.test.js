import { newStatsString } from './utils.js';

const test = QUnit.test;

test('should return a string describing the current state', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You changed the skyline 1 times, the waterfront 1 times, and the castle 1`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = newStatsString(1, 1, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});