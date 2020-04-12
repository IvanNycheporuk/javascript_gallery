import GalleryStar from './GalleryStar';

class GalleryItem {
    constructor(data, onMovieClickHandler, onStarClickcHandler) {
        this.data = data;
        this.onMovieClickHandler = onMovieClickHandler;
        this.onStarClickcHandler = onStarClickcHandler;
    }

    Render() {
        let item = document.createElement('div');
        item.classList.add('gallery-item');
        item.dataset.id = this.data.id;

        let galleryStar = new GalleryStar(this.data, this.onStarClickcHandler);

        item.innerHTML = `
            <div class="gallery-img" style="background-image: url('${this.data.img}')"></div>
            <div class="gallery-text">
                <p>${this.data.name}</p>
                <p>${this.data.year}</p>
            </div>           
        `;    

        item.appendChild(galleryStar.Render());
        
        item.addEventListener('click', (e) => {this.onMovieClickHandler(e, this.data)});
       
        return item;
    }
}

export default GalleryItem;