const shoppingList = require('../ShoppingList');

test('Check if list has milk or not', () => {
    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk')
})