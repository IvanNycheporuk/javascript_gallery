class ListGalleryItemBuilder {
    Build(data, favoriteStar) {
        let item = document.createElement('div');
        item.classList.add('gallery-item', 'list');
        item.dataset.id = data.id;

        item.innerHTML = `
            <div class="gallery-text">
                List: <p>${data.name}</p>
            </div>           
        `;

        item.appendChild(favoriteStar.Render());

        return item;
    }
}

export default ListGalleryItemBuilder;