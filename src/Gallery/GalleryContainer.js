import GalleryItem from './GalleryItem';

class GalleryContainer {
    constructor(data, onMovieClickHandler, onStarClickHandler) {
        this.data = data;
        this.onMovieClickHandler = onMovieClickHandler;
        this.onStarClickHandler = onStarClickHandler;
    }

    Build() {
        this.galleryContainer = document.createElement('div');
        this.galleryContainer.classList.add('gallery-container');

        let title = document.createElement('h2');
        title.classList.add('gallery-title');
        title.innerText = "Movies Gallery";

        this.galleryContainer.appendChild(title);

        this.galleryContainer.appendChild(this.RenderItems(this.data));

        return this.galleryContainer;
    }

    RenderItems(data) {
        let galleryWrapper = document.createElement('div');
        galleryWrapper.classList.add('gallery-wrapper');
        
        let galleryList = data.map(item => {
            let galleryItem = new GalleryItem(item, this.onMovieClickHandler, this.onStarClickHandler);
            return galleryItem.Render();
        });

        galleryList.forEach(item => {
            galleryWrapper.appendChild(item);
        });       
        
        return galleryWrapper;
    }
}

export default GalleryContainer;