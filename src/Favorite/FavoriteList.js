import FavoriteListItem  from './FavoriteListItem';

class FavoriteList {
    constructor(data) {
        this.data = data;
    }

    Test() {
        alert('removed')
    }

    Render() {
        let element = document.createElement('div');
        let title = document.createElement('h2');
        let listContainer = document.createElement('ul');
        title.innerText = 'Favorite List';
        
        element.classList.add('favorite-list');

        this.data.forEach(item => {
            let favouriteItem = new FavoriteListItem(item, this.Test).Build();
            listContainer.appendChild(favouriteItem);
        });
        
        element.appendChild(title);
        element.appendChild(listContainer);
        
        return element;
    }

    Update(data) {
        
    }
}

export default FavoriteList;