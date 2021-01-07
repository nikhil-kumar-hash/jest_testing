const {generateText, CheckAndGenerate} = require('../util');

test('should output name and age', () => {
    const text = generateText('Nikhil', 23);
    expect(text).toBe('Nikhil (23 years old)');
});

test('Should generate a valid text output', () => { // functional testing
    const text = CheckAndGenerate('Nikhil', '23');
    expect(text).toBe('Nikhil (23 years old)');
})