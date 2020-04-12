import GalleryContainer from './Gallery/GalleryContainer';
import GalleryModal from './Gallery/GalleryModal';
import FavoriteStore from './Favorite/FavoriteStore';
import FavoriteList from './Favorite/FavoriteList';
//import data from './films.json';

class App {
    constructor(el) {
        this.el = el;
        this.favoriteStore = [];

        this.modal = new GalleryModal();
        
        this.favoriteList = null;
        this.favoriteStore = new FavoriteStore((data) => {this.favoriteList.Update(data)});
        
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
        let favoriteList = this.BuildFavoriteList(this.favoriteStore.GetData(), (e, item) => {this.favoriteStore.Remove(item)});

        container.innerHTML = gallery;
        
        this.el.appendChild(gallery);
        this.el.appendChild(favoriteList);
    }

    BuildGalleryContainer(data) {
        let galleryContainer = new GalleryContainer(data, this.modal.Open, this.favoriteStore.Add).Build();   
        
        return galleryContainer;
    }

    BuildFavoriteList(data, callback) {
        this.favoriteList = new FavoriteList(data, callback);

        return this.favoriteList.Build();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App(document.getElementById('App'));
});