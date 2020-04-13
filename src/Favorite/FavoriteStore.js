class FavoriteStore {
    constructor(onUpdatedHandler) {
        this.data = [];
        this.onUpdatedHandler = onUpdatedHandler;

        this.FethDataFromStore();
        
        this.Add = this.Add.bind(this);
        this.Remove = this.Remove.bind(this);
        this.Toggle = this.Toggle.bind(this);
    }

    Add(item) {
        if (this.Has(item)) return;

        this.data.push(item);
        localStorage.setItem('favoriteFilms', JSON.stringify(this.data));

        this.onUpdatedHandler(this.data);
    }

    Remove(id) {
        this.data = this.data.filter(x => {
            return x !== id;
        });

        localStorage.setItem('favoriteFilms', JSON.stringify(this.data));
        
        this.onUpdatedHandler(this.data);
    }

    FethDataFromStore() {
        if (localStorage.getItem('favoriteFilms')) {
            this.data = JSON.parse(localStorage.getItem('favoriteFilms'));
        }
    }

    Toggle(item) {
        if (this.Has(item)) {
            this.Remove(item);
        }
        else {
            this.Add(item);
        }
    }

    Has(id) {
        return this.data.some(x => x === id);
    }

    GetData() {
        return this.data;
    }
}

export default FavoriteStore;