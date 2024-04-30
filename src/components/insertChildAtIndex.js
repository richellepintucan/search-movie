/**
 * Inserts a child element at a specified index within a parent element.
 *
 * @param {HTMLElement} parentElement - The parent element to which the child will be inserted.
 * @param {HTMLElement} childElement - The child element to insert.
 * @param {number} index - The index at which the child element will be inserted.
 * @returns {void}
 */

const insertChildAtIndex = (parentElement, childElement, index) => {
    // if index is 0 then just append it
    if (index === 0) {
        parentElement.prepend(childElement);
    } else {
        const referenceNode = parentElement.children[index];
        parentElement.insertBefore(childElement, referenceNode);
    }
};

export default insertChildAtIndex;

