/**
 * Creates an image container with provided image data.
 *
 * @param {Object} imgData - The image data object.
 * @param {string} imgData.id - The ID for the image container.
 * @param {string} imgData.src - The source URL of the image.
 * @param {string} imgData.title - The title of the image.
 * @returns {HTMLElement} The created image container.
 */

const createImage = (image) => {
    //create image-box
    const imageBox = document.createElement('div');
    imageBox.classList.add('image-box');
    imageBox.id = image.id;

    //create img
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.title;

    //create title
    const title = document.createElement('h6');
    title.innerText = image.title;

    imageBox.append(img, title);

    return imageBox;
};

export default createImage;
