import GalleryStar from './GalleryStar';

class GalleryItem {
    constructor(data, onMovieClickHandler, onStarClickcHandler) {
        this.data = data;
        this.onMovieClickHandler = onMovieClickHandler;
        this.onStarClickcHandler = onStarClickcHandler;
        this.el = null;

        let isFavorite = this.data.favorite;
        this.favoriteStar = new GalleryStar(isFavorite, () => {
            this.data.favorite = this.favoriteStar.value;
            this.onStarClickcHandler(this.data);
        });
    }

    Render(builder) {
        let item = builder.Build(this.data, this.favoriteStar);
        item.addEventListener('click', (e) => {
            this.onMovieClickHandler(e, this.data);
        });

        this.el = item;
        return item;
    }

    SetFavorite(value) {
        this.data.favorite = value;
        this.favoriteStar.SetValue(value);
    }
}

export default GalleryItem;