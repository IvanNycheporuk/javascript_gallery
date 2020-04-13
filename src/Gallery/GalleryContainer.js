import GalleryItem from './GalleryItem';
import CardGalleryItemBuilder from './Builders/CardGalleryItemBuilder';
import ListGalleryItemBuilder from './Builders/ListGalleryItemBuilder';

class GalleryContainer {
    constructor(data, onMovieClickHandler, onStarClickHandler, onFilterHandler) {
        this.data = data;
        this.onMovieClickHandler = onMovieClickHandler;
        this.onStarClickHandler = onStarClickHandler;
        this.onFilterHandler = onFilterHandler;
        this.galleryItems = [];
        this.galleryContainer = null;

        this.builders = {
            'list': new ListGalleryItemBuilder(),
            'card': new CardGalleryItemBuilder()
        };
        this.itemRenderType = 'card';
        this.filteringGenre = '';
    }

    Build() {
        this.galleryContainer = document.createElement('div');
        this.galleryContainer.classList.add('gallery-container');

        let titleHeader = document.createElement('div');
        titleHeader.classList.add('gallery-header');
        titleHeader.innerHTML = `
            <select></select>
            <h2>Movies Gallery</h2>
            <div class="view-switcher">
                <button class='card'>Card</button>
                <button class='list'>List</button>
            </div>
        `;
        this.galleryContainer.appendChild(titleHeader);

        let galleryWrapper = document.createElement('div');
        galleryWrapper.classList.add('gallery-wrapper');

        this.galleryContainer.appendChild(galleryWrapper);
        this.RenderItems(this.data);

        this.galleryContainer.querySelector('.card').addEventListener('click', () => {
            this.SetItemRenderType('card');
        });

        this.galleryContainer.querySelector('.list').addEventListener('click', () => {
            this.SetItemRenderType('list');
        });

        this.BuildSelect();

        return this.galleryContainer;
    }

    BuildSelect() {
        let select = this.galleryContainer.querySelector('select');
        select.appendChild(new Option('-choose genre-', '', true, true))

        let genresArr = this.data.map(item => {
            return item.genres.map(genre => genre.toLowerCase());
        });
        let uniqueGenres = [];

        for (var i = 0; i < genresArr.length; i++) {
            for (var j = 0; j < genresArr[i].length; j++) {
                if (!uniqueGenres.includes(genresArr[i][j])) {
                    uniqueGenres.push(genresArr[i][j]);
                }
            }
        }

        uniqueGenres.forEach(genre => {
            let option = new Option(genre, genre);
            select.appendChild(option);
        });

        select.addEventListener('input', (e) => {
            console.log('asdasd');
            this.FilterByGenre(e.target.value);
        })
    }

    RenderItems(data) {
        let itemsContainer = this.galleryContainer.querySelector('.gallery-wrapper');
        itemsContainer.innerHTML = '';

        this.galleryItems = data.map(item => {
            let galleryItem = new GalleryItem(item, this.onMovieClickHandler, (item) => {
                this.onStarClickHandler(item);
            });
            return galleryItem;
        });

        this.galleryItems.forEach(item => {
            let html = item.Render(this.builders[this.itemRenderType]);
            itemsContainer.appendChild(html);
        });       
    }

    SetItemRenderType(type) {
        if (type in this.builders) {
            this.itemRenderType = type;
            this.RenderItems(this.data);
            this.FilterByGenre(this.filteringGenre);
        }
    }

    UpdateMovieFavoriteState(id, value) {
        let item = this.galleryItems.find(x => x.data.id === id);
        item.SetFavorite(value);
    }

    FilterByGenre(genre) {
        let items = this.galleryItems;
        this.filteringGenre = genre;

        if (genre.length > 0) {
            items = items.filter(item => {
                return !item.data.genres.some(x => x.toLowerCase() === genre);
            });
        }

        for (let i = 0; i < this.galleryItems.length; i++) {
            let item = this.galleryItems[i];

            if (items.some(x => x.data.id === item.data.id)) {
                item.el.classList.remove('hidden');
            } else {
                item.el.classList.add('hidden');
            }
        }
    }
}

export default GalleryContainer;