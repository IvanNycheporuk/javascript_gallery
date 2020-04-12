class FavoriteListItem {
    constructor(data, onClickHandler) {
        this.data = data;
        this.onClickHandler = onClickHandler;
    }

    Build() {
        let listItem = document.createElement('li');
        listItem.classList.add('list-item');

        listItem.innerHTML = `
            <p>${this.data.name}</p>
            <span class="remove-favorite-item">&#10006;</span>
        `;

        listItem.querySelector('.remove-favorite-item').addEventListener('click', (e) => {this.onClickHandler(e, this.data.id)} );

        return listItem;
    }
}

export default FavoriteListItem;