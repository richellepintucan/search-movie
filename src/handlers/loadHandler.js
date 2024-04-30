import data from '../data.js';
import dom from '../dom.js';
import createImage from '../components/createImage.js';

const loadHandler = () => {
    data.images.forEach((image) => {
        const imageBox = createImage(image);
        dom.images.append(imageBox);

        // Save posters

        data.posters.push({
            id: image.id,
            dom: imageBox,
            title: image.title,
        });
    });
};

export default loadHandler;
