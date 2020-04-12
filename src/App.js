import GalleryContainer from './Gallery/GalleryContainer';
import GalleryModal from './Gallery/GalleryModal';
import FavoriteStore from './Favorite/FavoriteStore';
import FavoriteList from './Favorite/FavoriteList';

class App {
    constructor(el) {
        this.el = el;
        this.favoriteStore = [];

        this.modal = new GalleryModal();
        this.favoriteStore = new FavoriteStore();

        this.GetData().then(res => {
            this.Init(res);
        })
    }

    GetData(){
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
        let container = document.createElement('div');
        container.classList.add('container');

        let gallery = this.BuildGalleryContainer(data);
        let favoriteList = this.BuildFavoriteList(this.el);

        container.innerHTML = gallery;
        
        this.el.appendChild(gallery);
        this.el.appendChild(favoriteList);
    }

    BuildGalleryContainer(data) {
        let galleryContainer = new GalleryContainer(data, this.modal.Open, this.favoriteStore.Add).Build();   
        
        return galleryContainer;
    }

    BuildFavoriteList(el) {
        let favoriteList = new FavoriteList('test');
        let test = favoriteList.Render();

        return test;
    }
}

document.addEventListener('DOMContentLoaded', () => {
   new App(document.getElementById('App'));
});