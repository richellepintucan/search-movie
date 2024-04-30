/**
 * @jest-environment jsdom
 */

import createImage from './createImage.js';

describe('createImage', () => {
    test('should create an image container with provided image data', () => {
        // Arrange
        const imgData = {
            id: 1,
            dataName: 'aquaman',
            src: '../assets/aquaman.jpg',
            title: 'Aquaman',
        };

        // Act
        const imageContainer = createImage(imgData);

        // Assert
        expect(imageContainer).toBeDefined();
        expect(imageContainer.tagName).toEqual('DIV');
        expect(imageContainer.classList.contains('image-box')).toEqual(true);
        expect(imageContainer.id).toEqual('1');

        const imgElement = imageContainer.querySelector('img');
        expect(imgElement).toBeDefined();
        expect(imgElement.tagName).toEqual('IMG');
        expect(imgElement.src).toEqual('http://localhost/assets/aquaman.jpg');
        expect(imgElement.alt).toEqual('Aquaman');

        const titleElement = imageContainer.querySelector('h6');
        expect(titleElement).toBeDefined();
        expect(titleElement.tagName).toEqual('H6');
        expect(titleElement.innerText).toEqual('Aquaman');
    });
});
