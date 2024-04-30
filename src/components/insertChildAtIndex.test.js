/**
 * @jest-environment jsdom
 */

import insertChildAtIndex from './insertChildAtIndex';

describe('insertChildAtIndex', () => {
    test('should insert a child element at the specified index within a parent element', () => {
        // Arrange
        const parentElement = document.createElement('div');
        const childElement1 = document.createElement('span');
        const childElement2 = document.createElement('span');
        const childElement3 = document.createElement('span');
        parentElement.appendChild(childElement1);
        parentElement.appendChild(childElement3); // So that index 1 is between 0 and 2

        // Act
        insertChildAtIndex(parentElement, childElement2, 1);

        // Assert
        expect(parentElement.children.length).toEqual(3);
        expect(parentElement.children[0]).toEqual(childElement1);
        expect(parentElement.children[1]).toEqual(childElement2);
        expect(parentElement.children[2]).toEqual(childElement3);
    });

    test('should prepend a child element if index is 0', () => {
        // Arrange
        const parentElement = document.createElement('div');
        const childElement1 = document.createElement('span');
        const childElement2 = document.createElement('span');
        parentElement.appendChild(childElement1);

        // Act
        insertChildAtIndex(parentElement, childElement2, 0);

        // Assert
        expect(parentElement.children.length).toEqual(2);
        expect(parentElement.children[0]).toEqual(childElement2);
        expect(parentElement.children[1]).toEqual(childElement1);
    });
});
