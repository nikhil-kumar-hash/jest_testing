const cloneArray = require('../cloneArray');

test('Check if array is cloned correctly',() => {
    const array = [1,2,3,4]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array) // pass by reference
})