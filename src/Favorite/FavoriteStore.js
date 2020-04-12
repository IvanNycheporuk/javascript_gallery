class FavoriteStore {
    constructor(onUpdatedHandler) {
        this.data = [];
        this.onUpdatedHandler = onUpdatedHandler;

        this.FethDataFromStore();
        
        this.Add = this.Add.bind(this);
        this.Remove = this.Remove.bind(this);
    }

    Add(item) {
        let updatedItem = {
            favourite: true,
            ...item
        }

        this.data.push(updatedItem);
        localStorage.setItem('favoriteFilms', JSON.stringify(this.data));

        this.onUpdatedHandler(this.data);
    }

    Remove(id) {
        console.log(id)
        this.data = this.data.filter(film => {
            return film.id !== id;
        });

        localStorage.setItem('favoriteFilms', JSON.stringify(this.data));
        
        this.onUpdatedHandler(this.data);
    }

    FethDataFromStore() {
        if (localStorage.getItem('favoriteFilms')) {
            this.data = JSON.parse(localStorage.getItem('favoriteFilms'))
        }
    }

    GetData() {
        return this.data;
    }
}

export default FavoriteStore;