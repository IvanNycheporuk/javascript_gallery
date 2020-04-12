class FavoriteStore {
    constructor(onUpdatedHandler) {
        this.data = [];
        this.onUpdatedHandler = onUpdatedHandler;
    }

    Add(item) {
        let updatedItem = {
            favourite: true,
            ...item
        }

        this.data.push(updatedItem);
        this.onUpdatedHandler(this.data);

        console.log(this.data)
    }

    Remove(id) {
        this.data = this.data.filter(film => {
            return film.id !== id;
        });
        
        this.onUpdatedHandler(this.data);
    }
}

export default FavoriteStore;