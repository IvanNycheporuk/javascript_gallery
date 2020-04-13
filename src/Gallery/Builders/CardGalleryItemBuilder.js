class CardGalleryItemBuilder {
    Build(data, favoriteStar) {
        let item = document.createElement('div');
        item.classList.add('gallery-item', 'card');
        item.dataset.id = data.id;

        item.innerHTML = `
            <div class="gallery-img" style="background-image: url('${data.img}')"></div>
            <div class="gallery-text">
                <p>${data.name}</p>
                <p>${data.year}</p>
            </div>           
        `;

        item.appendChild(favoriteStar.Render());

        return item;
    }
}

export default CardGalleryItemBuilder;