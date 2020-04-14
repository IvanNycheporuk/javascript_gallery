import GalleryContainer from './Gallery/GalleryContainer';
import GalleryModal from './Gallery/GalleryModal';
import FavoriteStore from './Favorite/FavoriteStore';
import FavoriteList from './Favorite/FavoriteList';

class App {
    constructor(el) {
        this.el = el;
        this.favoriteStore = [];
        this.gallery = null;
        this.favoriteList = null;
        this.data = null;
        this.modal = new GalleryModal();

        this.favoriteStore = new FavoriteStore((data) => {
            let items = this.data.filter(item => {
                return data.indexOf(item.id) !== -1;
            });

            this.favoriteList.Update(items);
        });
        
        this.GetData().then(res => {
            this.data = res;
            this.DefineFavorites(this.data);
            this.Init(this.data);
        });
    }
    
    GetData() {
        return new Promise(resolve => {
            fetch('http://my-json-server.typicode.com/moviedb-tech/movies/list')
                .then(resolve => {
                    return resolve.json();
                })
                .then(res => {
                    let transformedArr = res.map(item => {
                        return {
                            favorite: false,
                            ...item
                        }
                    })
    
                    resolve(transformedArr);                
                });
        })        
    }

    Init(data) {      
        this.gallery = new GalleryContainer(data, this.modal.Open, (item) => { this.favoriteStore.Toggle(item.id); });

        let favoriteList = this.BuildFavoriteList(
            (e, id) => {
                this.gallery.UpdateMovieFavoriteState(id, false);
                this.favoriteStore.Remove(id);
            });
        
        this.el.appendChild(this.gallery.Build());
        this.el.appendChild(favoriteList);
    }

    BuildFavoriteList(callback) {
        let favorites = this.favoriteStore.GetData();
        let items = this.data.filter(item => {
            return favorites.indexOf(item.id) !== -1;
        });

        this.favoriteList = new FavoriteList(items, callback);

        return this.favoriteList.Build();
    }

    DefineFavorites(items) {
        let favorites = this.favoriteStore.GetData();
        favorites.forEach(f => {
            let item = items.find(x => x.id === f);
            if (item !== null) item.favorite = true;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App(document.getElementById('App'));
});