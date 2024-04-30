import data from '../data.js';
import dom from '../dom.js';

const filterImagesHandler = (value) => {
    data.posters.forEach((poster) => {
        const posterExist = document.getElementById(poster.id);
        if (poster.title.toLowerCase().includes(value.toLowerCase())) {
            if (!posterExist) {
                dom.images.append(poster.dom);
            }
        } else {
            if (posterExist) {
                posterExist.remove();
            }
        }
    });
    // if images has no children then show message "Image not found"
    if (dom.images.children.length === 0) {
        dom.message.innerText = 'Image not found';
        dom.images.append(dom.message);
    } else {
        dom.message.remove();
    }
};

export default filterImagesHandler;
