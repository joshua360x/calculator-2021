// IMPORT MODULES under test here:
import { add, subtract, multiply, divide } from '../math-utils';

const test = QUnit.test;

test('add() should take 1 and 1 and return 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(1, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('subtract() should take 1 and 1 and return 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(1, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('multiply() should take 1 and 1 and return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(1, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('divide() should take 2 and 1 and return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(2, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
