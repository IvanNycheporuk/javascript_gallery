import FavoriteListItem  from './FavoriteListItem';

class FavoriteList {
    constructor(data, onClickRemoveHandler) {
        this.data = data;
        this.onClickRemoveHandler = onClickRemoveHandler;
        this.el = null;

        this.Update = this.Update.bind(this);
    }

    Build() {
        let element = document.createElement('div');
        let title = document.createElement('h2');
        title.classList.add('title');        
        title.innerText = 'Favorite List';
        
        let listContainer = document.createElement('ul');
        element.classList.add('favorite-list');

        if (this.data) {
            this.data.forEach(item => {
                let favouriteItem = new FavoriteListItem(item, this.onClickRemoveHandler).Build();
                listContainer.appendChild(favouriteItem);
            });
        }
        
        element.appendChild(title);
        element.appendChild(listContainer);

        this.el = element;
        
        return element;
    }

    ClearList() {
        this.el.querySelector('ul').innerHTML = '';
    }

    Update(data) {
        this.ClearList();

        let listContainer = this.el.querySelector('ul');

        data.forEach(item => {            
            let favoriteItem = new FavoriteListItem(item, this.onClickRemoveHandler).Build();

            listContainer.appendChild(favoriteItem);
        });
    }
}

export default FavoriteList;